const Contact = require("./../models/Contact")
exports.home = async (req, res) => {
  const contacts = await Contact.find({}).populate("specialOccasions");
  console.log(contacts)
  return   res.render("profile/home",{contacts})
}

