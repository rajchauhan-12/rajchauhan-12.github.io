import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const SECRET = "sometext";
app.listen(8080, () => {
  console.log("Server started");
});
let users = []
app.use(express.json());

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    return res.json({ message: "Access Denied" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.role === role){
      next()
    }
    else{
      return res.json({message:"Unauthorized Access"})
    }
  };
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    const token = jwt.sign(found, SECRET, { expiresIn: "1h" });
    res.status(200).json({ user: found, token });
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
});

app.get("/users", authenticate, authorize("admin"), (req, res) => {
  res.json(users);
});

app.post("/register",(req,res)=>{
  
})