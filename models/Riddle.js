import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize.js';

const Riddle = sequelize.define('Riddle', {
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'riddles',
    timestamps: true,
});

export default Riddle;