const itemModel = require("../models/itemModel");
const userModel = require("../models/usermodel");

const itemCreateController = async (req, res) => {
    try {
        const { name, categary, description, imageUrl, createdAt } = req.body;
        const userId = req.body.id
        if (!name || !categary) {
            return res.status(400).send({
                success: false,
                message: "Please fill all the fields"
            })
        }
        const item = await itemModel.create({ name, categary, description, imageUrl, createdAt });

        if (!item) {
            return res.status(400).send({
                success: false,
                message: "Uable to create item plaese try again"
            });
        }

        console.log(userEmail)
        const user = await userModel.findById({ _id: userId });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }


        user.items.push(item._id);


        await user.save();

        // Respond with success
        return res.status(201).send({
            success: true,
            message: "Item created and added to user's items",
            item,
            user: user
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "login api failed",
            error
        })
    }
}

module.exports = { itemCreateController }