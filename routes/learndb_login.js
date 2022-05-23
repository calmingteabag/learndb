import path from 'path'
import routerHome from './learndb_home.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const userModel = require('../db/db_users.js')
const routerLogin = newRouter

routerHome.get('/login', (req, res) => {
    res.render(path.join(__dirname, '../static/html/login'), { status: "" })
})

routerHome.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
    (req, res) => {
        res.render(path.join(__dirname, '../static/html/index'), { status: req.flash('message') })
    });

export default routerHome
