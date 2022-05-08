import { Sequelize } from 'sequelize'

const dbDialect = 'postgres'
const dbDatabaseName = 'learndb'
const dbAddress = `${dbDialect}://postgres:admin@localhost:5432/${dbDatabaseName}`
const sequelize = new Sequelize(dbAddress, {
    dialect: `${dbDialect}`,
    logging: false
})

export { sequelize, dbAddress, dbDialect, dbDatabaseName }