const userModel = require("../models/usermodel");

const logoutController = (req, res) => {


    res.clearCookie("token")
    res.status(200).render("login")
}

const homeController = async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch user details from the database
        const user = await userModel.findById({ _id: userId }).populate('items').populate('favorites'); // Populate items if needed

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }


        return res.status(200).render('userHome', {
            user: user,
            items: user.items,
            favorites: user.favorites,
            totalItems: items.length,
            message: 'Profile loaded successfully'
        });
    } catch (error) {

        res.status(500).send({
            success: false,
            message: "profile  api failed",
            error
        })
    }
}

const profileController = async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch user details from the database
        const user = await userModel.findById({ _id: userId }).populate('items'); // Populate items if needed

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }


        return res.status(200).render('profile', {
            user: user, // Pass user data to profile view
            message: 'Profile loaded successfully'
        });
    } catch (error) {

        res.status(500).send({
            success: false,
            message: "profile  api failed",
            error
        })
    }
}
module.exports = {
    logoutController,
    profileController,
    homeController
}