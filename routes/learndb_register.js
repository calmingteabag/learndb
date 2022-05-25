const path = require('path')
const newRouter = require('./learndb_path_router.js')
const routerRegister = newRouter
const userModel = require('../db/db_users.js')
const bcrypt = require('bcrypt')
const { hash } = require('bcrypt')
userModel.sync()

routerRegister.get('/db_register', (req, res) => {
    res.render(path.join(__dirname, '../static/html/register'),
        { status: `` })
})

routerRegister.post('/db_register', async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password, salt)

    const [createdUser] = await userModel.findOrCreate({
        where: {
            username: req.body.username,
            email: req.body.email,
            salt: salt,
            password: hashPass
        },
        defaults: {
            username: req.body.username,
            email: req.body.email,
        },
    })

    if (createdUser) {
        res.render(path.join(__dirname, '../static/html/index'),
            { status: `User ${req.body.username} created` })
    } else {
        res.render(path.join(__dirname, '../static/html/index'), { msg: "error creating user" })
    }
})

module.exports = routerRegister