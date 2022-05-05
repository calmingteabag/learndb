import { DataTypes } from 'sequelize'
import sequelize from './db_conn.js'

const learndbModel = sequelize.define('learning_concepts', {
    technology: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        defaultValue: "Assunto Indefinido"
    },
    tags: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    }
})

export default learndbModel
