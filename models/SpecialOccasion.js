const mongoose          = require("mongoose")

//Schema
const specialOccasionSchema = mongoose.Schema({
    name:String,
    date:{
        type:Date,
    },
    notes:String,
   giftList:[{
       type:String
   }]
})



// MODELO
const SpecialOccasion= mongoose.model("SpecialOccasion", specialOccasionSchema)


// EXPORTACIÓN
module.exports =SpecialOccasion