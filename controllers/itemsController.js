const itemModel = require("../models/itemModel");
const userModel = require("../models/usermodel");

const itemCreateController = async (req, res) => {
    try {
        const { name, category, description, timesWorn } = req.body;
        const userId = req.user.id;


        if (!name || !category) {
            return res.status(400).send({
                success: false,
                message: "Please fill in all fields"
            })
        }
        // Create the item, adding 'createdAt' as Date.now() if needed
        const item = await itemModel.create({ name, category, description, timesWorn, createdAt: Date.now(), userId });

        if (!item) {
            return res.status(400).send({
                success: false,
                message: "Unable to create item, please try again"
            });
        }

        const user = await userModel.findById({ _id: userId });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }

        // Push the created item ID to the user's items array
        user.items.push(item._id);
        console.log(user, item)
        await user.save();

        // Respond with success
        return res.status(201).render("addItems", { user, item });


    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Item creation failed",
            error
        });
    }
}
const itemsDisplayController = async (req, res) => {
    try {
        const userId = req.user._id;

        const user = await userModel.findById({ _id: userId }).populate('items').populate('favorites');
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });

        }
        res.render("myCloset", { user, items: user.items });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "items display failed",
            error
        });
    }

}
const deleteItemController = async (req, res) => {
    try {
        const itemId = req.params.id;

        // Check if the item exists
        const item = await itemModel.findById({ _id: itemId });
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        // Delete the item
        await item.findByIdAndDelete({ _id: itemId });


        res.status(200).render("userHome");
    } catch (error) {

        console.error("Error deleting item:", error);
        res.status(500).json({ message: "An error occurred while deleting the item" });
    }
};



module.exports = { itemCreateController, itemsDisplayController, deleteItemController };
