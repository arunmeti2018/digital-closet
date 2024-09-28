
const jwt = require("jsonwebtoken");
const userModel = require("../models/usermodel")
async function isLoggedInMiddleware(req, res, next) {
    try {
        const token = req.cookies.token;

        if (!token) {
            // If no token is provided
            return res.status(401).render("login");
        }


        let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const email = decoded.email;




        const user = await userModel.findOne({ email }); // Assuming `decoded.id` is the user ID
        req.user = user;
        console.log(req.id);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "is logged in check failed",
            error
        })


    }





    next();


}
module.exports = { isLoggedInMiddleware };