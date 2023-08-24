const express = require("express");

const {
  httpCreateWebsite,
  httpGetWebsitesForUser,
} = require("./websites.controller");

const websitesRouter = express.Router();

websitesRouter.post("/create", httpCreateWebsite);
websitesRouter.get("/user-websites/:email", httpGetWebsitesForUser);

module.exports = websitesRouter;
