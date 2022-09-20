import "./config.js";

import connectDb from "./database/connect.js";
import execQuery from "./database/execQuery.js";
import existingDbTables from "./database/existingDbTables.js";
import writeToFile from "./file/writeToFile.js";

try {
  await connectDb();

  for (const table of existingDbTables) {
    let i = 0;

    while (true) {
      const [result] = await execQuery(
        existingDb,
        `SELECT * FROM ${table} LIMIT ${i}, 500`
      ); // limit the data fetched from the table.

      if (result?.length > 0) {
        await writeToFile(result, table); // add objects-to-csv npm package.

        if (result.length < 500) {
          break;
        }

        i += 500;
      } else {
        break;
      }
    }
  }
} catch (error) {
  console.log(error);
}
