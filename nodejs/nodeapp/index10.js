import express from "express";

const app = express();

const port = process.argv[2] || 8080;
const stname = process.argv[3] || "john";
const stname1 = process.argv[4] || "john";

console.log(`hello ${stname} and ${stname1}`);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
