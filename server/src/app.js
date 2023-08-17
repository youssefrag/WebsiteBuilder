const path = require("path");
const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");

const usersRouter = require("./routes/users/users.router");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
// app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/users", usersRouter);

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

// S3 image code

const { generateUploadURL } = require("./utils/s3");

app.get("/s3Url", async (req, res) => {
  const url = await generateUploadURL();

  res.send({ url });
});

module.exports = app;
