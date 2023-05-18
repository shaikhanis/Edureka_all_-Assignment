const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const Rout=require('./routers/router');
const mongoose=require('mongoose');
const RazorPay=require('razorpay');

const URI="mongodb+srv://Dharineesh:root@cluster0.ltt2jzw.mongodb.net/Zomato1";
mongoose.connect(URI,()=>{
    console.log("URI connected");
})

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/zomato',Rout);

const PORT=7001;
app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`));
