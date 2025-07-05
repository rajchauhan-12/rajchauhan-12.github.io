import express from "express";
const app = express();

app.use("/images",express.static("images"));

app.listen(8080, () => {
    console.log("Hello HP")
});

app.get("/products",(req,res) => {
    res.send("product List");
});