// const sequelize = require('./DataBase/DB');
// const User = require('./Models/User');
// const Order = require('./Models/Order');
// const Contact = require('./Models/Contact');

// // ceate one to many relation
// User.hasMany(Order);


// async function createuser(){
//     let user = await User.create({name:'anas',email:'anas@anas'});
//     user.createOrder({total:45});
//     console.log(user);
//     //let order = await Order.findAll({where:1});
//     //console.log(order);
// }

// createuser();


const express = require('express');
const userRouter = require('./Routes/UserRouter');

const app = express();

app.use(express.json());


app.listen(5000,()=>{
    console.log('server is running at port:5000');
})

app.use('/',userRouter);