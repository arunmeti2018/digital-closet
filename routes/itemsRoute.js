const express = require("express");

const { isLoggedInMiddleware } = require("../middlewares/isLoggedIn");
const { logoutController } = require("../controllers/userController");
const { itemCreateController } = require("../controllers/itemsController");


const router = express.Router();

router.post("/create", isLoggedInMiddleware, itemCreateController)


module.exports = router 