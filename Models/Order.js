const Sequelize = require('sequelize');
const sequelize = require('../DataBase/DB');


const Order = sequelize.define('Order',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    total:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
});

module.exports = Order;