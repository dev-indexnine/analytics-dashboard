const databaseConfig = {
  /* Declaration of databases for development environment */
  development: {
    existing: {
      host: process.env.EXISTING_DB_HOST,
      database: process.env.EXISTING_DB_DATABASE,
      username: process.env.EXISTING_DB_USERNAME,
      password: process.env.EXISTING_DB_PASSWORD,
      port: process.env.DB_PORT,
      dialect: "mysql",
    },
  },
};

export default databaseConfig;
