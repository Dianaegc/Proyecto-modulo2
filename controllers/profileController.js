
const Contact = require("../models/Contact")
//const User = require("./../models/User.model")
exports.home = async (req, res) => {
  const _id = req.session.currentUser._id
  console.log("_id", _id)
const contacts = await Contact.find({})// me trae todos mis contactos
.populate("specialOccasions")
.populate("user")
  //console.log(contacts)
  .then((contacts) => {
    console.log(contacts)
    const list = contacts
    //  console.log(list);
    res.render("profile/home", {contacts:list})  
  })
  .catch((e) => {
    console.log(e)
  })
}
