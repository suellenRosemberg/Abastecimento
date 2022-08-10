import Sequelize from 'sequelize';

const componenteSequelize = new Sequelize('abastecimento','root','007100',
{
    dialect:'mysql', host:'localhost', port: 3308
});

export default componenteSequelize;