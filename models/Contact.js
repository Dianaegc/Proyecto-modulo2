const mongoose      = require("mongoose")


//schema
const contactSchema=  mongoose.Schema({
    name: String,
    category:String,
    specialOccasions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"SpecialOccasion"
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
       }

      
})



// 3. MODEL
const Contact = mongoose.model("Contact", contactSchema)


// 4. EXPORTACIÓN
module.exports = Contact