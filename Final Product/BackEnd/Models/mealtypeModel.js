const mongoose=require('mongoose')

const mealTypeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("MealTypes",mealTypeSchema,"mealtype");