const express = require("express");

const { httpCreateWebsite } = require("./websites.controller");

const websitesRouter = express.Router();

websitesRouter.post("/create", httpCreateWebsite);

module.exports = websitesRouter;
