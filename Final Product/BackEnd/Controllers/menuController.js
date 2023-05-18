const Menu=require('../Models/menuModel');

exports.getMenu=(req,res)=>{
    var filter={};
    filter['restaurantName']={$in:req.params.rName};
    Menu.find(filter) //restaurantName:req.params.rName
    .then((result)=>{
        res.send({
            message:"Menu got",
            data:result
        })
        console.log(result);
    })
    .catch(e=>{
        res.send({
            Error:e
        })
    })
}
