const express = require("express");

const { httpCreateUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/", httpCreateUser);
usersRouter.post("/", httpCreateUser);

module.exports = usersRouter;
