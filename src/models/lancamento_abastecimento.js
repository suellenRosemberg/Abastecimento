import { INTEGER, DOUBLE, TIMESTAMP, Sequelize} from 'sequelize';

import database from '../../pages/api/db2';

const Lancamento_abastecimento = database.define('lancamento_abastecimento',
    {      
        
        id:
        {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        data:
        {
            type: TIMESTAMP,
            allowNull: false,
        },
        volume:
        {
            type: DOUBLE,
            allowNull: false,
        },
        hodometro:
        {
            type: DOUBLE,
            allowNull: false,
        },
        valor_litro:
        {
            type: DOUBLE,
            allowNull: false,
        },
        veiculo_id:
        {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            foreingKey: true
        }
    }
)


export default Lancamento_abastecimento;


  