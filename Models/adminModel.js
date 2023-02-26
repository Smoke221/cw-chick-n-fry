const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
const adminSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const adminModel = mongoose.model("admin",adminSchema)

module.exports = {
    adminModel
}