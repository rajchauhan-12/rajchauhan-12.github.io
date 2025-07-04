import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json()); 

let products = [];  

app.post("/", (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    return res.status(400).json({ message: "All fields are required: id, name, price" });
  }

  const product = { id, name, price };
  products.push(product);
  res.status(201).json({ message: "Product created", product });
});

app.get("/", (req, res) => {
  res.json(products);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = products.length;

  products = products.filter((product) => product.id !== id);

  if (products.length < initialLength) {
    res.json({ message: `Product with id ${id} deleted.` });
  } else {
    res.status(404).json({ message: `Product with id ${id} not found.` });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
