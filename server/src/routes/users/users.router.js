const express = require("express");

const { httpCreateUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/", httpCreateUser);

module.exports = usersRouter;
