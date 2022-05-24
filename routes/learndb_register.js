// import path from 'path'
// import { __dirname, newRouter } from './learndb_path_router.js'

const path = require('path')
const __dirname = require('./learndb_path_router.js')
const newRouter = require('./learndb_path_router.js')

const routerRegister = newRouter
const userModel = require('../db/db_users.js')
userModel.sync()

routerRegister.post('/db_register', async (req, res) => {
    const [createdUser] = await userModel.findOrCreate({
        where: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        },
        defaults: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    })

    if (createdUser) {
        res.render(path.join(__dirname, '../static/html/index'),
            { status: `User ${req.body.username} created` })
    } else {
        res.render(path.join(__dirname, '../static/html/index'), { msg: "error creating user" })
    }
})
module.exports = routerRegister
// export default routerRegister