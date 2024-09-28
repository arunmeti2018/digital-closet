const userModel = require("../models/usermodel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const usermodel = require("../models/usermodel");
const saltRounds = 10;

const registerController = async (req, res) => {
    try {
        const { userName, email, password, profile } = req.body;

        console.log(userName, email, password, profile);

        if (!userName || !email || !password) {
            return res.status(500).send({
                success: false,
                message: "please provide all fields",

            })

        }

        const existing = await userModel.findOne({ email })
        if (existing) {
            return res.status(500).send({
                success: false,
                message: "email is already registered",

            })
        }
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                const user = await userModel.create({
                    userName, email, password: hash, profile
                });

                res.status(201).render("login");

            })
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: "register api failed",
            error
        })
    }
}

const loginController = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "login failed",

            })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "user not found",

            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Incorrect email or password",

            })
        }
        else {

            const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "5h" });
            res.cookie("token", token);
            res.status(200).redirect("/auth/home");
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "login api failed",
            error
        })
    }
}

module.exports = { registerController, loginController }