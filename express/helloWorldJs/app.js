import express from "express";

const app = express();
const port = 3000;

const cb1 = (req, res, next) => {
  console.log("Callable 1");
  if (req.params.id == 0) {
    console.log("I came here");
    return next("route");
  }
  res.send("Sign In sucessfully.");
};
const cb2 = (req, res) => {
  console.log("Callable 2");
  if (req.params.id == 2) {
    return res.send("I am the second middleware");
  }
  next();
};
const cb3 = (req, res) => {
  console.log("Callable 3");
  res.send("I am the third middleware");
};
const cb4 = (req, res) => {
  console.log("Callable 4");
  res.send("Sign Id is missing");
};
app.get("/singin/:id", [cb1, cb2], cb3);
app.get("/singin/:id", cb4);

app.get("/singin/:id", (req, res) => {
  // Write business login here
  res.send("Sign Id is missing 1");
});
app.get("/signup", (req, res) => {
  // Write business login here
  res.send("SingUp sucessfully.");
});
app.use((err, req, res) => {
  console.log("here this is handler");
  console.error("ERROR in application", err.message);
  return res.send("Something went wrong");
});

app.listen(port, () => {
  console.log("App is listening on port 3000");
});
