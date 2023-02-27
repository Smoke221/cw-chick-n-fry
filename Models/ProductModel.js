const mongoose = require("mongoose")

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
schema.set(option, value);
const AddModel = mongoose.model("breakfast",AddSchema)

module.exports = {
    AddModel
}
