
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "password",
	database: "bamazon_DB"
});

var productName = "";

connection.connect (function(err) {
	if (err) throw err;
	console.log("connected as id: " + connection.threadId);
	displayProducts();
});

function displayProducts() {
	connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
		if (err) throw err;
		console.log(JSON.stringify(res, null, 2));
	});
	selectProduct();
};

function selectProduct() {
	inquirer
		.prompt([
		{
			name: "item_id",
			type: "input",
			message: "Enter the item id for the product you want to purchase.",
			validate: function(value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}
		},
		{
			name: "stock_quantity",
			type: "input",
			message: "Enter the amount you would like to purchase.",
			validate: function(value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}
		}])
		.then(function(answer) {
			var query = "SELECT product_name, price, stock_quantity FROM products WHERE item_id = ?";
			connection.query(query, answer.item_id, function(err, res) {
				for (var i = 0; i < res.length; i++) {
					if (err) {
						console.log("The id you entered does not match an item id. Please input another id.");
						selectProduct();
					}
					if (answer.stock_quantity > res[i].stock_quantity) {
						console.log("There are only " + res[i].stock_quantity + " in stock. please select another amount.");
						selectProduct();
					}
					else {
						console.log("You selected to buy " + answer.stock_quantity + " " + res[i].product_name);
						console.log("Your purchase comes to a total of $" + answer.stock_quantity * res[i].price);
						var queryUpdate = "UPDATE products WHERE product_name = " + res[i].product_name + " SET stock_quantity = stock_quantity - " + answer.stock_quantity;
						connection.query(queryUpdate, function(err, res) {
						});
					}
				}
			});
		});
}