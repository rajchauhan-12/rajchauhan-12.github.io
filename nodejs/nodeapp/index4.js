import express from "express";

const app = express();

const logger = (req, res, next) => {
  req.msg = "Hello";
  next();
};

const auth = (req, res, next) => {
  const name = req.params.name;
  if (name === "john") {
    next();
  } else {
    res.send("Access Denied");
  }
};

app.get("/:name", logger, auth, (req, res) => {
  res.send(req.msg + " World");
});

app.get("/products", logger, (req, res) => {
  res.send(req.msg + " Products");
});

app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
