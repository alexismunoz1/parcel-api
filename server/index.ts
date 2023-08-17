import * as express from "express";
import * as path from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
