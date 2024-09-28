const logoutController = (req, res) => {


    res.clearCookie("token")
    res.status(200).render("login")
}

module.exports = {
    logoutController
}