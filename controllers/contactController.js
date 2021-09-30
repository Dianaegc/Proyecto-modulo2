const SpecialOccasion = require("./../models/SpecialOccasion");
const Contact = require("./../models/Contact");

exports.createContact =async(req,res) => {
    res.render("contact/createContact")
}
exports.createContactForm=async(req,res) => {
    const {name,category}=req.body
    const newContact= await Contact.create({name,category})
    console.log(newContact)
    res.redirect(`/profile/home`)//cuando presione el save
}

exports.editContact = async (req, res) => {
    console.log(req.params)
    const contactId = req.params.contactId;
  
    const contact = await Contact.findById(contactId).populate("specialOccasions")
    console.log(contact)
    return res.render("contact/contactEdit", {contact});
  
  }

exports.editContactForm = async (req, res) => {
    const {contactId}= req.params
    const { name, category } = req.body;
    await Contact.findByIdAndUpdate(contactId, { name, category}, { new: true })
     res.redirect("/profile/home")
}

exports.deleteContact=async (req, res) => {
    const {contactId} = req.params
    await Contact.findByIdAndDelete(contactId)
    console.log("Contact delete")
    res.redirect("/profile/home")
  }