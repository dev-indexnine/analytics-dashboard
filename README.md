Fetching data from the Drupal Database tables and and writing the data to its respective CSV files.

## npm packages used

- `dotenv`: To configure app .env file(s)
- `sequelize`: ORM tool to connect to MySQL DB
- `mysql2`: package used by sequelize
- `objects-to-csv`: To create and write CSV files

## Commands to run project

1. `npm install`
2. `node app.js`

## Code structure

-- Root:

- app.js: entry point.
- config.js: .env file configuration.

-- data: Contains generated CSV files.

-- database: Contains scripts related to database configuration, connection, querying.

- existingDbTables.js: array of existing DB table names.
- config.js: database configurations.
- connect.js: function to make a connection to Drupal DB through sequelize.
- execQuery.js: function to execute a query and returns the result.

-- file: Contains script related to create and write CSV files.

- writeToFile: function to create and write raw data from the DB table to its respective CSV files.

## Brief

- app.js is the entry point of the application.
- A connection to the Drupal DB is made through `connectDB` function.
- After the connection is successfully made, query to fetch data from the DB in chunks is executed for each table in the existing DB. Then, each chunk of data fetched is passed to the `writeToFile` function to write the data to its respective CSV file.
