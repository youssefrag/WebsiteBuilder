const express = require("express");

const { httpCreateUser, httpFindUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/login", httpFindUser);
usersRouter.post("/register", httpCreateUser);

module.exports = usersRouter;
