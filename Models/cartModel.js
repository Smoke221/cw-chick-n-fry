const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
const cartSchema = mongoose.Schema({
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

const cartModel = mongoose.model("breakfast",cartSchema)

module.exports = {
    cartModel
}