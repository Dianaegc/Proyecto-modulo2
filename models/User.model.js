const mongoose          = require("mongoose")

//Schema
const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true        
    },
    passwordHash:{
        type: String,
        required: [true, "Password is required"]
    },
    contacts:[{  // relacion usuario con contactos
        type: mongoose.Schema.Types.ObjectId,
        ref:"Contact"
    }]
}, {
    timestamps: true
})



// MODELO
const User = mongoose.model("User", userSchema)


// EXPORTACIÓN
module.exports = User