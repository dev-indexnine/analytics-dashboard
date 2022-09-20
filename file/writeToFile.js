import path from "path";
import { fileURLToPath } from "url";
import ObjectsToCsv from "objects-to-csv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writeToFile = async (rawData, filename) => {
  const filePath = path.join(__dirname, "..", "data", `${filename}.csv`);

  try {
    const objToCsv = new ObjectsToCsv(rawData);

    await objToCsv.toDisk(filePath, { append: true });
  } catch (error) {
    throw new Error(`Error writing data to the ${filename}.csv\n`, error);
  }
};

export default writeToFile;
