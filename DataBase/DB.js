const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'learnSequelize',
    'postgres',
    'root',
    {
        host: 'localhost',
        logging:false,
        dialect: 'postgres'
    }
)

const connect = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter:true});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}

connect();

module.exports = sequelize;