const SpecialOccasion = require("./../models/SpecialOccasion");

exports.createspecialOccasion = async (req, res) => {
  const { date, notes, giftList} = req.body;
  console.log(giftList)
  const newSpecialOccasion =  await SpecialOccasion.create({
    date,notes,giftList
  });

  console.log(newSpecialOccasion);
  res.redirect(`/specialOccasion/${newSpecialOccasion._id}`);
};

exports.specialOccasion = async (req, res) => {

  return res.render("specialOccasion/index");
};

exports.editSpecialOccasion = async (req, res) => {
  console.log(req.params)
  const soId = req.params.specialOccasionId;

  const specialOccasion = await SpecialOccasion.findById(soId);
  console.log(specialOccasion);
  return res.render("specialOccasion/soEdit", {specialOccasion});

}