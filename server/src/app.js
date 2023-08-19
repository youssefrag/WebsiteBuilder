const path = require("path");
const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/users/users.router");
const imagesRouter = require("./routes/images/images.router");
const websitesRouter = require("./routes/websites/websites.router");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
// app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/users", usersRouter);
app.use("/images", imagesRouter);
app.use("/websites", websitesRouter);

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

module.exports = app;
