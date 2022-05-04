import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/waifudb', {
    dialect: 'postgres'
    // logging: false
})

export default sequelize