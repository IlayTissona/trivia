const express = require("express");
let avatar = express.Router();

avatar.get("/:picName", async (req, res) => {
    const { picName } = req.params
    return res.sendFile(`${process.cwd()}/avatars/${picName}.jpeg`);
});
// avatar.get("/:picName", async (req, res) => {
//     const { picName } = req.params
//     return res.sendFile(`${process.cwd()}/avatars/${picName}.jpeg`);
// });

module.exports = avatar;
