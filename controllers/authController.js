const bcryptjs      = require("bcryptjs")
const saltRounds    = 10

const User          = require("./../models/User.model")


exports.loginUser = async (req, res) => {

    res.render("auth/login")

}
exports.signUpUser = async (req, res) => {
    res.render("auth/signup")
}