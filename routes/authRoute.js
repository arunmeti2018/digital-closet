const express = require("express");

const { registerController, loginController } = require("../controllers/authController")

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

router.get("/home",(req,res)=>{
res.send("loginsucces")
})
module.exports = router 