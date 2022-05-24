import { Sequelize } from 'sequelize'

const dbDialect = 'postgres'
const dbDatabaseName = 'learndb'
const dbLogin = process.env.LOGIN
const dbPassword = process.env.PASSWORD
// const dbAddress = `${dbDialect}://${dbLogin}:${dbPassword}@localhost:5432/${dbDatabaseName}`
// const sequelize = new Sequelize(dbAddress, {
//     dialect: `${dbDialect}`,
//     logging: false
// })
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
})

// export { sequelize, dbAddress, dbDialect, dbDatabaseName }
export { sequelize }