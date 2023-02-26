const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
const AddSchema = mongoose.Schema({
    id:String,
    main_image:String,
    title:String,
    price:String,
    calories:String,
    carbs:String,
    fat:String,
    protein:String,
    userID:String
})

const AddModel = mongoose.model("breakfast",AddSchema)

module.exports = {
    AddModel
}