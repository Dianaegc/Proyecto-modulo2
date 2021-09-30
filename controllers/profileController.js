const Contact = require("./../models/Contact")
//const User = require("./../models/User.model")
exports.home = async (req, res) => {
  //const currentUserId = req.session.currentUser._id;
const contacts = await Contact.find({}).populate("specialOccasions");// me trae todos mis contactos

  //const dbUser = await User.findById(currentUserId).populate("contacts")
  console.log(contacts)
  return   res.render("profile/home",{contacts})
}

