const SpecialOccasion = require("./../models/SpecialOccasion");
const Contact = require("./../models/Contact");

exports.createContact =async(req,res) => {
    res.render("contact/createContact")
}
exports.createContactForm=async(req,res) => {
    const {name,category}=req.body
    const newContact= await Contact.create({name,category})
    console.log(newContact)
    res.redirect("/")
}