const express = require("express");
let avatar = express.Router();
const fs = require('fs');

avatar.get("/count", (req, res) => {
    const imageData = fs.readdirSync('./avatars/');
    console.log(imageData);
    return res.send(imageData.length.toString())
});

avatar.get("/:picName", async (req, res) => {
    const { picName } = req.params
    return res.sendFile(`${process.cwd()}/avatars/${picName}.jpeg`);
});

module.exports = avatar;
