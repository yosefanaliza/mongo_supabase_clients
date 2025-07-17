import { Sequelize } from 'sequelize';

const uri = process.env.SUPABASE_URI

const sequelize = new Sequelize(uri,  {
    dialect: 'postgres',
    logging: false,
});

export default sequelize;