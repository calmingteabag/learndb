const { DataTypes } = require('sequelize')
const sequelize = require('./db_conn.js')

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
        get() {
            return () => this.getDataValue('password')
        }
    },
    salt: {
        type: DataTypes.STRING,
        get() {
            return () => this.getDataValue('salt')
        }
    }
})

module.exports = userModel