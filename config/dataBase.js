const mongoose = require("mongoose");



const connectDataBase = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to data base", (mongoose.connection.host))
    } catch (error) {
        // console.log("data bse error", error, colors.bgRed)
        console.log("Database error: ", (error));

    }
};



module.exports = { connectDataBase }
