import express from "express";
import producerRouter from "./router/product.router.js";
const app = express();
const port = 3000;

app.use("/product", producerRouter);
app.get("/", (req, res) => {
  res.send("Router Example");
});
app.listen(port, () => {
  console.log("Router example is running on port", port);
});
