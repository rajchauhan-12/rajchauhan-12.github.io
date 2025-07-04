import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});
// app.get("/", (req, res) => {
//   res.send("Good Morning");
// });
// app.get("/user", (req, res) => {
//   res.send("Hello User");
// });
// app.get("/ab*cd", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/products", (req, res) => {
//   res.status(201).json({ name: "Product 1", price: 45 });
// });

const products = [
  { id: 1, name: "Product 1", price: 45 },
  { id: 2, name: "Product 2", price: 70 },
  { id: 3, name: "Product 3", price: 55 },
];
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const pid = req.params.id;

  res.json();
});

// app.get("/:name", (req, res) => {
//   res.send(req.params.name);
// });

// app.get("/student/:name", (req, res) => {
//   res.send(req.params.name);
// });

// app.get("/student/:name/age/:age", (req, res) => {
//   res.send(req.params.name + req.params.age);
// });

// app.get("/student/:name/:age", (req, res) => {
//   res.send(req.params.name + req.params.age);
// });

// app.get("/", (req, res) => {
//   res.send(req.headers.authorization);
// });

// app.get("/", (req, res) => {
//   res.send(req.query.name+req.query.age);
// });