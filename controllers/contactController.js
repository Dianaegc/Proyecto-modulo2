const SpecialOccasion = require("./../models/SpecialOccasion");
const Contact = require("./../models/Contact");

exports.createContact =async(req,res) => {
    res.render("contact/createContact")
}
exports.createContactForm=async(req,res) => {
    const {name,category}=req.body
    const newContact= await Contact.create({name,category})
    console.log(newContact)
    res.redirect(`/contact/${newContact.id}`)//cuando presione el save
}

exports.editContact = async (req, res) => {
    console.log(req.params)
    const contactId = req.params.contactId;
  
    const contact = await Contact.findById(contactId);
    return res.render("contact/contactEdit", {contact});
  
  }

exports.editContactForm = async (req, res) => {
    const {contactId}= req.params
    const { name, category } = req.body;
    await Contact.findByIdAndUpdate(contactId, { name, category}, { new: true })
     res.redirect("/profile/home")
}