const express = require("express");
let user = express.Router();
const fs = require('fs');
const {
    createUser,
    getUser,
    login,
    logout,
    tokenRefresh,
    tokenValidate,
} = require("./userController");

user.post("/register", createUser, login);
user.post("/login", login);
user.post("/logout", tokenValidate, logout);
user.post("/token", tokenRefresh);
user.get("/user-stats", tokenValidate, getUser);

module.exports = user;
