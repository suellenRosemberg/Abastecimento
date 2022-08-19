import { INTEGER, STRING, DOUBLE, DATE } from 'sequelize'

import database from '../../pages/api/db2'

const Veiculo = database.define("veiculo",
    {      
        Id:
        {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Placa:
        {
            type: STRING,
            allowNull: false,
        },
        Volume_reservatorio:
        {
            type: DOUBLE,
            allowNull: false,
        },
        Ano_fabricacao:
        {
            type: INTEGER,
            allowNull: false,
        },
        Ano_modelo:
        {
            type: INTEGER,
            allowNull: false,
        },
        Hodometro_inicial:
        {
            type: DOUBLE,
            allowNull: false,
        },
        Modelo_veiculo_id:
        {
            type: INTEGER,
            allowNull: false,
            foreingKey: true
        },
    },
);

export default Veiculo;


