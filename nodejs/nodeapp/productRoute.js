import express from "express"
const productRouter = express.Router()
productRouter.get("/show", (req, res) => {
  res.send("products show api");
});
productRouter.delete("/:id", (req, res) => {
  res.send("delete products api");
});
export default productRouter;