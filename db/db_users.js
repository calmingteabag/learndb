const { DataTypes } = require('sequelize')
const sequelize = require('./db_conn.js')
// const crypto = require('crypto')
// const bcrypt = require('bcrypt')

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


// userModel.saltCreate = () => {
//     return crypto.randomBytes(16).toString('base64')
// }

// userModel.saltEncryptPass = (plainText, salt) => {
//     return crypto.createHash('RSA-SHA256').update(plainText).update(salt).digest('hex')
// }

// const setSaltPass = user => {
//     if (user.changed('password')) {
//         user.salt = userModel.saltCreate()
//         user.password = userModel.saltEncryptPass(user.password(), user.salt())
//     }
// }

// userModel.beforeCreate(setSaltPass)
// userModel.beforeUpdate(setSaltPass)

module.exports = userModel