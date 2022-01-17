import { readFile } from "fs/promises";

const validFrontend = "http://localhost:3000";
const dataPath = "routes/data/companyData.json";

export const comapnyInfo = async (_req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", validFrontend);
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      res.send(JSON.parse(await readFile(dataPath, "utf8")))
    } catch(e) {
        console.log(e);
    }
  }