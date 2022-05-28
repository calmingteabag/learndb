const { DataTypes } = require('sequelize')
const sequelize = require('./db_conn.js')

const googleModel = sequelize.define('google users', {
    google_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
})

module.exports = googleModel