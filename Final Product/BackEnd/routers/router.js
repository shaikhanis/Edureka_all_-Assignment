const express=require('express');
const restaurant=require('../Controllers/restaurantController');
const mealType=require('../Controllers/mealtypeController');
const location=require('../Controllers/locationController');
const menu=require('../Controllers/menuController');

const Router=express.Router();

Router.get('/locations',location.getRestaurants);
Router.get('/mealtypes',mealType.getMealTypes);
Router.get('/restaurants/:city_id',restaurant.getRestaurantsFromCityName);
Router.get('/details/:rName',restaurant.getOneRestaurant);
// Router.get('/filters',restaurant.getFilteredRestaurants);
Router.post('/filters/',restaurant.getRestaurant);
Router.get('/menu/:rName',menu.getMenu);
// Router.post('/get-order-id',payment.orderId);

module.exports=Router;