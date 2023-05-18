const Restaurant=require('../Models/restaurantModel');

//Homepage method
exports.getRestaurantsFromCityName=(req,res)=>{
   
    var filter={city:req.params.city_id}
    
    Restaurant.find(filter).then((result)=>{
        res.send({
            message:'Execution successful',
            data:result
        })
    })
}

//DetailsPage Method
exports.getOneRestaurant=(req,res)=>{
    console.log(req.params.rName);
    Restaurant.findOne({name:req.params.rName})
    .then(result=>{
        res.send({
            message:"Details got",
            data:result
        })
    })
}

//FilterPage Big div
exports.getFilteredRestaurants=(req,res)=>{
    var filter={};
    Restaurant.find(filter).limit(2)
    .then((result)=>{
        res.send({
            message:'Fltered two',
            data:result
        })
    })
}

//FilterPage sorts
exports.getRestaurant=(req,res)=>{
    console.log("hITTED");
    var filter={}

    if(req.body.min_cost && req.body.max_cost){
        filter.cost={
            $lt:req.body.max_cost,
            $gt:req.body.min_cost
        }
    }

    if(req.body.cuisine && req.body.cuisine.length>0){
        filter['Cuisine.name']={$in:req.body.cuisine};
    }

    if(req.body.city_id){
        filter.city=req.body.city_id;
    }

    Restaurant.find(filter).sort({cost:req.body.sort}) //.limit(2).skip(2*(req.params.pageNo-1))
    .then((result)=>{
        
        res.send({
            message:"filter Method done",
            data:result
        });
    }).catch((err)=>{
        res.send({
            message:'fail',
            content:err
            
        })
    })
}
