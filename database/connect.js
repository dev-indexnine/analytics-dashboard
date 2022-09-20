import Sequelize from "sequelize";

import databaseConfig from "./config.js";

const connectDb = async () => {
  const env = process.env.NODE_ENV === "dev" ? "development" : "production";
  const databases = databaseConfig[env];

  for (const database in databases) {
    const db = databases[database];

    try {
      const sequelize = new Sequelize(
        db.database,
        db.username,
        db.password,
        db
      );

      await sequelize.authenticate();

      global[`${database}Db`] = sequelize;

      console.log(`Successfully connected to the ${database} database.`);
    } catch (error) {
      console.log(
        `Error occurred while connecting to the ${database} database.\n`,
        error
      );
    }
  }
};

export default connectDb;
