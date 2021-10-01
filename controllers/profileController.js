const Contact = require("../models/Contact")
exports.home = async (req, res) => {
  const _id = req.session.currentUser._id // guardado el id del usuario que esta loggeado
  console.log("_id", _id)
const contacts = await Contact.find({user: _id})// me trae todos los contactos donde el id del usuario sea este
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
