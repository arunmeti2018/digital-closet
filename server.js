const express = require("express");
const app = express();
const dotenv = require("dotenv")
app.use(express.json());


dotenv.config();
app.get("/", (req, res) => {
    res.send("eksjs")
})

try {
    //PORT
    const PORT = process.env.PORT || 8080;

    //listen
    app.listen(PORT, (err) => {
        if (err)
            console.error(err)
        console.log(`node  is server running on ${PORT}`.blue);
    })

} catch (error) {
    console.log("error coonecting to port not listening ongn")
}