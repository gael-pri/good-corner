import express from "express";
import router from "./routes";
import fs from "fs";
import db from "./db/sqliteConfig";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


const sqlContent: string = fs.readFileSync('./src/db/queries.sql', { encoding: 'utf-8'});

db.exec(sqlContent, (err) => {
    if (err) {
      console.error("Error executing the SQL script:", err.message);
    } else {
      console.log("Database initialized successfully.");
    }
  });

  
app.use("/", router);

app.listen(port);