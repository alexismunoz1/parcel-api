"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const staticDirPath = path.resolve(__dirname, "../../dist");
app.get("/", (req, res) => {
    res.status(200).send({ message: "Server is running" });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
