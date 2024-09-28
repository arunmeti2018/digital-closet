const mongoose = require("mongoose");



const connectDataBase = async () => {
    try {
        console.log(process.env.MONGO_URL)
        await mongoose.connect("mongodb://localhost:27017/digital-closet");
        console.log("connected to data base", (mongoose.connection.host))
    } catch (error) {
        // console.log("data bse error", error, colors.bgRed)
        console.log("Database error: ", (error));

    }
};



module.exports = { connectDataBase }
