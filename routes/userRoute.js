const express = require("express");

const { isLoggedInMiddleware } = require("../middlewares/isLoggedIn");
const { logoutController, homeController } = require("../controllers/userController");


const router = express.Router();



router.get("/home", isLoggedInMiddleware, homeController);
// router.get("/profile", isLoggedInMiddleware,)
router.get("/logout", logoutController);

router.get("/tryOn", isLoggedInMiddleware, (req, res) => {
    res.render("generate")
})


router.get("/community", (req, res) => {
    res.render("community")
})

router.get("/sustainability", isLoggedInMiddleware, (req, res) => {
    res.render("sustainability");
})

module.exports = router 