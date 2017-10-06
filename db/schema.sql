DROP DATABASE IF EXISTS dash;

CREATE DATABASE dash;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id serial PRIMARY key,
    name VARCHAR (50) UNIQUE,
    company VARCHAR (50) UNIQUE,
    category VARCHAR(50) NOT NULL,
    image VARCHAR(255) UNIQUE,
    datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS emails;

CREATE TABLE emails (
	id int(11) NOT NULL AUTO_INCREMENT,
	emailaddress VARCHAR(50) DEFAULT NULL,
	referrals int(11) DEFAULT 0,
	datetime datetime DEFAULT CURRENT_TIMESTAMP,
	referralcode varchar(45) DEFAULT NULL,
	verified BOOL DEFAULT FALSE,
	referredby VARCHAR(50) DEFAULT NULL,
	PRIMARY KEY(id),
	UNIQUE KEY emailaddress_UNIQUE(emailaddress )
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS admin;

CREATE TABLE admin (
	id int(11) NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(50) NOT NULL,
	company_name VARCHAR(50) NOT NULL,
	datetime datetime DEFAULT CURRENT_TIMESTAMP,
	category VARCHAR(50) NOT NULL,
	PRIMARY KEY(id)
)

-- Database Creation
--CREATE DATABASE dash;


-- Then run the following in your Sequelize CLI to create the migrations and seed the database
-- Note this only works since the migrations already exist in the repo
---` sequelize db:migrate `
---` sequelize db:seed:all `

--- Below are the commands used in the Sequelized CLI to create the migrations...
--- Note that there is no need to run this if you clone down the repo, since the migrations already exist...
--- The below lines are just for my personal documentation (they were ran in command line to set up migrations).


--- 1. Set Up Sequelize index.js and folders
---` sequelize init `


--- 2a. Create the burgers.js model and Migrations
---` sequelize model:create --name products --attributes 'company:string ...' `

--- 2b. Run migration to get it into MySQL database (the product entries were added manually)
---` sequelize db:migrate `


--- 3a. Create a seed file for products (up and down entries were done manually)
---` sequelize seed:create --name products-seeder `

--- 3b. Run the Database seeder file
---` sequelize db:seed:all `


--- 4a. Create the product-done.js model and Migrations (this is an additional table for products-done created associations)
---` sequelize model:create --name product-done --attributes 'done_name:string' `

--- 4b. Run migration to get it into MySQL database (the products entries were added manaully)
---` sequelize db:migrate `



--- Below are how to remove the migration and/or seeds (aka calling the "down" of the models)...
--- (they can be ran in command line).


--- Remove the seeds
---` sequelize db:seed:undo:all `

--- Remove the whole table
---` sequelize db:migrate:undo:all `