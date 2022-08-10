import { INTEGER, STRING, Sequelize } from 'sequelize';

import database from '../../pages/api/db2';

const Modelo_veiculo = database.define('modelo_veiculo',

    {      
        
        Id:
        {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome:
        {
            type: STRING,
            allowNull: false,
        },
        Fabricante:
        {
            type: STRING,
            allowNull: false,
        }
    }
)


export default Modelo_veiculo;



