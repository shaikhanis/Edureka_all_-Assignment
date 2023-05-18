const mealType=require('../Models/mealtypeModel');

exports.getMealTypes=(req,res)=>{
    var filter={};

    mealType.find(filter).then((result)=>{
        res.send({
            message:'Execution Successful',
            data : result
        })
        console.log(result);
    })
}