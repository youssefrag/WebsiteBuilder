const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

const MONGO_URL =
  "mongodb+srv://websitebuilder-api:kgZ5DUt0Zix0XEWt@websitebuilder.yadpues.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

const startServer = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
  });

  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
};

startServer();
