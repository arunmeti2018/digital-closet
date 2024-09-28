const express = require("express");

const { isLoggedInMiddleware } = require("../middlewares/isLoggedIn");
const { logoutController } = require("../controllers/userController");


const router = express.Router();



router.get("/home", isLoggedInMiddleware, (req, res) => {
    res.send("userhome pafe")
})
router.get("/logout", logoutController);
module.exports = router 