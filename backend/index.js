import express from "express";
import { comapnyInfo } from "./routes/companyInfo.js";

const app = express()
const port = 5000

// REQUEST TYPE: GET request
// URL: "/"
// DESCRIPTION: Response contains company info
app.get("/", comapnyInfo);

app.listen(port, () => {
  console.log(`Cosuno assignment: app listening at http://localhost:${port}`)
})