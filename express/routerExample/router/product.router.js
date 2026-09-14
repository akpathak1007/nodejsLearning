import express from "express";

const productRouter = express.Router();

producerRouter.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});
productRouter.get("/list{/:id}", (req, res) => {
  if (req.params.id) {
    return res.send(`Product is fetch with id ${req.params.id}`);
  }
  return res.send("Product list fetched");
});
productRouter.post("/create", (req, res) => {
  return res.send("Product list fetched");
});

productRouter.put("/update/:id", (req, res) => {
  return res.send(`Product is updated with id ${req.params.id}`);
});
productRouter.delete("/delete/:id", (req, res) => {
  return res.send(`Product is deleted with id ${req.params.id}`);
});

export default productRouter;
