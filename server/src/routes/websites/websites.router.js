const express = require("express");

const {
  httpCreateWebsite,
  httpGetWebsitesForUser,
  httpGetWebsitesComponents,
  httpEditWebsiteComponents,
} = require("./websites.controller");

const websitesRouter = express.Router();

websitesRouter.post("/create", httpCreateWebsite);
websitesRouter.get("/user-websites/:email", httpGetWebsitesForUser);
websitesRouter.get("/components/:websiteId", httpGetWebsitesComponents);
websitesRouter.post("/edit-website/:websiteId", httpEditWebsiteComponents);

module.exports = websitesRouter;
