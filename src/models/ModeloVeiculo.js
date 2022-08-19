import { INTEGER, STRING, Sequelize } from 'sequelize';

import database from '../../pages/api/db2';

const ModeloVeiculo = database.define('modelo_veiculos',

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


export default ModeloVeiculo;



