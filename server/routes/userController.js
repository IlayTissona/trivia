const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const { User, Avatar } = require("../models")
const { Op } = require("sequelize")

require("dotenv").config()
const { ACCESS_SECRET, REFRESH_SECRET } = process.env;

const createUser = async (req, res, next) => {
    const body = req.body;
    const passwordForLogin = body.password;
    if (passwordForLogin.length < 6) return res.status(400).send("password length must be 6 or longer");
    body.password = hashSync(body.password, genSaltSync(10));
    console.log(body)

    const existing = await User.findOne(
        { where: { [Op.or]: [{ name: body.name }, { email: body.email }] } }
    );

    if (existing) return res.status(409).send("username or email already exists");

    const rawNewUser = (await User.create(body, { returning: true })).toJSON()

    body.password = passwordForLogin

    // const refreshToken = await new Promise((resolve, reject) => {
    //     sign({ result: rawNewUser }, REFRESH_SECRET, {
    //         expiresIn: "1d",
    //     }, (err, token) => {
    //         if (err) next(err)
    //         resolve(token)
    //     });
    // });
    // console.log(refreshToken)
    // const newUser = await User.update({ refreshToken }, {
    //     where: { id: rawNewUser.id },
    //     returning: true,
    //     plain: true
    // })
    // console.log(newUser);
    // const accessToken = sign({ result: newUser }, ACCESS_SECRET, {
    //     expiresIn: "2h",
    // });

    return next()

    // const { name, email, id } = newUser
    // return res.status(201).json({ name, email, refreshToken, id, accessToken });
};


const login = async (req, res) => {
    try {
        const body = req.body;

        let existing = (await User.findOne(
            { where: { name: body.name } }
        ))


        if (!existing) return res.status(404).send("cannot find user");

        if (existing.refreshToken) existing.refreshToken = undefined;
        // res.status(401).send("user already logged in")
        // const avatar = await existing.getAvatar({ through: "avatarId" }); //{ through: "avatarId" }
        const avatar = await Avatar.findByPk(existing.avatarId);

        existing = existing.toJSON();


        const isPasswordCorrect = compareSync(body.password, existing.password);
        if (!isPasswordCorrect) return res.status(403).send("Password incorrect");

        existing.password = null;


        const accessToken = sign({ result: existing }, ACCESS_SECRET, {
            expiresIn: "2h",
        });



        let refreshToken = sign({ result: existing }, REFRESH_SECRET, {
            expiresIn: "1d",
        });

        User.update({ refreshToken }, { where: { id: existing.id } })
        res.status(200).json({
            id: existing.id,
            name: existing.name,
            avatarUrl: avatar ? avatar.imgSrc : "/api/avatar/avatar1",
            accessToken,
            refreshToken,
        });
    } catch (error) {
        console.log(error)
        res.send(error);
    }
};


const logout = async (req, res) => {
    const { decoded } = req;
    console.log(decoded)
    User.update({ refreshToken: null }, { where: { id: decoded.id } })
        .then(() => res.json({ success: true }))
        .catch((e) => res.json({ success: false, error: e }))

    // res.status(200).send("User Logged Out Successfully");
    // next();
}

const tokenValidate = async (req, res, next) => {
    let token = req.get("Authorization");
    if (!token) return res.status(401).send("Access Token Required");
    // Remove Bearer from string
    token = token.slice(7);
    verify(token, ACCESS_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send("Invalid Access Token");
        } else {
            req.decoded = decoded.result;
            next();
        }
    });
};



const tokenRefresh = async (req, res, next) => {
    let { token } = req.body;
    if (!token) return res.status(401).send("Refresh Token Required");
    verify(token, REFRESH_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send("Invalid Refresh Token");
        } else {
            req.decoded = decoded;
            const accessToken = sign({ result: decoded.result }, ACCESS_SECRET, {
                expiresIn: "2h",
            });
            res.json({ accessToken });
        }
    });
};

const getUser = (req, res, next) => {
    const { id } = req.decoded;
    return User.findByPk(id).then(user => {
        user.password = undefined;
        res.json(user.toJSON())
    })
};

// --------------------------------------------------------------------------------------------

module.exports = {
    getUser,
    createUser,
    tokenRefresh,
    login,
    logout,
    tokenValidate,
};
