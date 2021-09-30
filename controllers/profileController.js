const Contact = require("./../models/Contact")
//const User = require("./../models/User.model")
exports.home = async (req, res) => {

const contacts = await Contact.find({}).populate("specialOccasions");// me trae todos mis contactos
  console.log(contacts)
  return   res.render("profile/home",{contacts})
}

