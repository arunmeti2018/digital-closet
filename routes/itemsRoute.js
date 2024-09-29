const express = require("express");

const { isLoggedInMiddleware } = require("../middlewares/isLoggedIn");
const { logoutController } = require("../controllers/userController");
const { itemCreateController, itemsDisplayController, deleteItemController } = require("../controllers/itemsController");


const router = express.Router();
router.get("/create", isLoggedInMiddleware, (req, res) => {
    res.render("addIems")
})
router.post("/addItems", isLoggedInMiddleware, itemCreateController)

router.delete("/delete/:id", isLoggedInMiddleware, deleteItemController)
router.get("/delete/", (req, res) => {
    res.render("userHome")
})
router.get("/myCloset", isLoggedInMiddleware, itemsDisplayController)
module.exports = router