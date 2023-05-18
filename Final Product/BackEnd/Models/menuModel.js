const mongoose=require('mongoose');

const menuSchema= new mongoose.Schema({
    restaurantId:{
        type:String
    },
    itemPrice:{
        type:Number
    },
    itemName:{
        type:String
    },
    itemDescription:{
        type:String
    },
    isVeg:{
        type:Boolean
    },
    restaurantName:{
        type:Array
    },
});

module.exports=mongoose.model("Menu",menuSchema,"menu");