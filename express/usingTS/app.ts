import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
app.get("/", (req: Request, res: Request) => {
  res.send("Hello World hi");
});
app.listen(3000, () => {
  console.log("App is listing on 3000 port");
});
