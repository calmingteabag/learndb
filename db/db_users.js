// import { DataTypes } from 'sequelize'
// import { sequelize } from './db_conn.js'

const { DataTypes } = require('sequelize')
const { sequelize } = require('./db_conn.js')

const userModel = sequelize.define('registered users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = userModel