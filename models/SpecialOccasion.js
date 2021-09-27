const mongoose          = require("mongoose")

//Schema
const specialOccasionSchema = mongoose.Schema({
    date:Number,
    notes:String,
   giftList:[{
       type:String
   }]
})



// MODELO
const specialOccasion= mongoose.model("specialOccasion", specialOccasionSchema)


// EXPORTACIÓN
module.exports =specialOccasion