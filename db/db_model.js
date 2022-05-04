import { DataTypes } from 'sequelize'
import sequelize from './db_conn.js'

const waifuModel = sequelize.define('Waifu', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER
    }
})

const leardbModel = sequelize.define

export default waifuModel
