const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})
adminSchema.set(option, value);
const adminModel = mongoose.model("admin",adminSchema)

module.exports = {
    adminModel
}
