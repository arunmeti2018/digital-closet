const express = require("express");

const { isLoggedInMiddleware } = require("../middlewares/isLoggedIn");
const { logoutController, homeController } = require("../controllers/userController");


const router = express.Router();



router.get("/home", isLoggedInMiddleware, homeController);
// router.get("/profile", isLoggedInMiddleware,)
router.get("/logout", logoutController);



module.exports = router 