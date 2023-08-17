"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.status(200).send({ message: "Server is running" });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
