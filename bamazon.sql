DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price INT NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Golf Balls', 'Sports & Outdoors', 25.97, 127);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Echo Spot', 'Electronics', 114.99, 3675);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Fitbit Charge 2', 'Electronics', 119.95, 414);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Optishot Gold Simulator', 'Sports & Outdoors', 1998, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Neon Sign', 'Electronics', 29.99, 56);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Shovel', 'Garden & Outdoor', 39.99, 790);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Protein Powder', 'Health & Fitness', 49.99, 1,074);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Sony Camera', 'Electronics', 799.00, 349);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Ballpoint Pens', 'Office Products', 4.99, 8,821);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Golf Tees', 'Sports & Outdoors', 2.99, 4,903);
