const { Sequelize } = require('sequelize')
const dbDialect = 'postgres'

const dbAddress = process.env.DATABASE_URL
// const sequelize = new Sequelize(dbAddress, {
//     dialect: `${dbDialect}`,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false

//         }
//     },
//     logging: false
// })


// development
const sequelize = new Sequelize(dbAddress, {
    dialect: `${dbDialect}`,
    logging: false
})

module.exports = sequelize