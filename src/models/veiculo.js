import { INTEGER, STRING, DOUBLE, Sequelize } from 'sequelize';

import database from '../../pages/api/db2';

const Veiculo = database.define('veiculo',

    {      
        
        id:
        {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        placa:
        {
            type: STRING,
            allowNull: false,
        },
        volume_reservatorio:
        {
            type: DOUBLE,
            allowNull: false,
        },
        ano_fabricacao:
        {
            type: INTEGER,
            allowNull: false,
        },
        ano_modelo:
        {
            type: INTEGER,
            allowNull: false,
        },
        hodometro_inicial:
        {
            type: DOUBLE,
            allowNull: false,
        },
        modelo_veiculo_id:
        {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            foreingKey: true
        }

    }
)


export default Veiculo;


