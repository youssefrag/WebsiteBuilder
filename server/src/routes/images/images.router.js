const express = require("express");

const { httpGetUploadURL } = require("./images.controller");

const imagesRouter = express.Router();

imagesRouter.get("/s3Url", httpGetUploadURL);

module.exports = imagesRouter;
