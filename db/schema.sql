-- Create the burgers_db database --
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create a burgers table --
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP DEFAULT current_timestamp NOT NULL,
  	PRIMARY KEY(id)
);