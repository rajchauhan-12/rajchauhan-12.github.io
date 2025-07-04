import express from "express";
const app = express();
app.listen(8080);
app.use(express.json());
let users = [];

const auth = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.json({ message: "Invalid Token" });
  }
};

app.get("/", auth, (req, res) => {
  res.json(users);
});
app.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User Registered" });
});
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find(
    (user) => user.email === email && user.pass === pass
  );
  if (found) {
    res.json({ message: "Welcome" });
  } else {
    res.json({ message: "Access Denied" });
  }
});