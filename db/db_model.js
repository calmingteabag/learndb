const { DataTypes } = require('sequelize')
const sequelize = require('./db_conn.js')

const learndbModel = sequelize.define('learning_concepts', {
    userId: {
        type: DataTypes.STRING,
    },
    technology: {
        type: DataTypes.STRING,
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

module.exports = learndbModel