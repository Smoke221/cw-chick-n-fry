const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    confirm_email:String,
    password:String,
})
schema.set(option, value);
const userModel = mongoose.model("user",userSchema)

module.exports = {
    userModel
}
