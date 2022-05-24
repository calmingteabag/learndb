import { Sequelize } from 'sequelize'

const dbDialect = 'postgres'
const dbAddress = process.env.DATABASE_URL
const sequelize = new Sequelize(dbAddress, {
    dialect: `${dbDialect}`,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false

        }
    },
    logging: false
})

// sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// });

export { sequelize }