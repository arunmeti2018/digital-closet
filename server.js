const express = require("express");
const path = require("path")
const app = express();
const dotenv = require("dotenv");
const { connectDataBase } = require("./config/dataBase");


connectDataBase();
// ejs view set
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


dotenv.config();

app.get("/auth", (req, res) => {
    res.render("login");
})
app.use("/auth", require("./routes/authRoute"));


try {
    //PORT
    const PORT = process.env.PORT || 8080;

    //listen
    app.listen(PORT, (err) => {
        if (err)
            console.error(err)
        console.log(`node  is server running on ${PORT}`);
    })

} catch (error) {
    console.log("error coonecting to port not listening ongn")
}
