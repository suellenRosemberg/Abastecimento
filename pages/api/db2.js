import Sequelize from 'sequelize';

const database = new Sequelize({
    database: 'abastecimento',
    dialect:'mysql', 
    host:'localhost',
    port: '3308',
    username:'root',
    password:'007100',
    define: {
        timestamps: false
    },
});

export default database
