import { INTEGER, STRING } from 'sequelize';

import database from '../../pages/api/db2';

const PostoCombustivel = database.define('posto_de_combustivel',
    {      
        
        id:
        {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        CNPJ:
        {
            type: STRING,
            allowNull: false,
        },
        nome_fantasia:
        {
            type: STRING,
            allowNull: false,
        },
        logradouro:
        {
            type: STRING,
            allowNull: false,
        },
        numero:
        {
            type: INTEGER,
            allowNull: false,
        },
        municipio:
        {
            type: STRING,
            allowNull: false,
        },
        uf:
        {
            type: STRING,
            allowNull: false,
        }
    }
)


export default PostoCombustivel;

