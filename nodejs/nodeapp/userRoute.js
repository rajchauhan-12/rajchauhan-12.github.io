import express from "express"
const userRouter = express.Router()
userRouter.get("/show", (req, res) => {
  res.send("Showing all users");
});
userRouter.post("/register", (req, res) => {
  const user = req.body;
  res.send("User registered" );
});
userRouter.post("/login", (req, res) => {
  res.send( "User logged in" );
});
export default userRouter;
