const express = require("express");

const {
  httpCreateWebsite,
  httpGetWebsitesForUser,
  httpGetWebsitesComponents,
} = require("./websites.controller");

const websitesRouter = express.Router();

websitesRouter.post("/create", httpCreateWebsite);
websitesRouter.get("/user-websites/:email", httpGetWebsitesForUser);
websitesRouter.get("/components/:websiteId", httpGetWebsitesComponents);

module.exports = websitesRouter;
