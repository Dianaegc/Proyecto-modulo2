const SpecialOccasion = require("../models/SpecialOccasion");
const Contact = require("../models/Contact");


exports.specialOccasion = async (req, res) => {
  const contactId = req.params.contactId;
  return res.render("specialOccasion/index",{contactId});//?
};
exports.createspecialOccasion = async (req, res) => {
  const { name,date, notes, giftList,contactId } = req.body;
  console.log(req.body.edit)
  console.log(req.body.save)
  const newSpecialOccasion =  await SpecialOccasion.create({
    name,date,notes,giftList
  });
  //para cambiar mi date a una string 
  //let d= new Date() 
  //let n= d.toString()

 // como pasar el id del contacto aca.
  const contact =await Contact.findByIdAndUpdate(contactId,{$push:{specialOccasions:newSpecialOccasion._id}}) // para ligar los special occasions al contacto
  console.log(contact);
  if(req.body.edit){ // si pican boton de edit , mande a tal pagina
    res.redirect(`/specialOccasion/edit/${newSpecialOccasion._id}`);
  }else{ // si pican boton de save , mande a tal pagina
    res.redirect('/profile/home');
  }
  
};


exports.editSpecialOccasion = async (req, res) => {
  console.log(req.params)
  const soId = req.params.specialOccasionId;

  const specialOccasion = await SpecialOccasion.findById(soId);
  console.log(specialOccasion);
  return res.render("specialOccasion/soEdit", {specialOccasion});

}

exports.editSpecialOccasionForm = async (req, res) => {
  console.log(req.params)
  const soId = req.params.specialOccasionId;
  const { name,date,notes,giftList} = req.body;
  const specialOccasion = await SpecialOccasion.findByIdAndUpdate(soId,{name,date,notes,giftList});
  console.log(specialOccasion);
  return res.redirect("/profile/home");
}

exports.deleteSpecialOccasion=async (req, res) => {
  const {specialOccasionId} = req.params
  await SpecialOccasion.findByIdAndDelete(specialOccasionId)
  console.log("SpecialOccasion delete")
  res.redirect("/profile/home")
}

