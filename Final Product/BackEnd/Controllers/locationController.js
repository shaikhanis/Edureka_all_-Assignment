const Location=require('../Models/locationModel');

exports.getRestaurants=(req,res)=>{
    var filter={};

    Location.find(filter).then((result)=>{
        
        res.send({
            message:"Execution Successful",
            data : result
        })
    })
}