// get > localhost:8080/api/users/show
// post > localhost:8080/api/users/register
// post > localhost:8080/api/users/login



// get > localhost:8080/api/products/show
// delete > localhost:8080/api/products/1


import express from "express";
import userRouter from "./userRoute.js";
import productRouter from "./productRoute.js";
const app =  express();
app.listen(8080, () => {
    console.log("server started")
})
app.use("/api/users",userRouter)
app.use("api/products",productRouter)