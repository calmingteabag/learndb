// import path from 'path'
// import routerHome from './learndb_home.js'
// import { __dirname, newRouter } from './learndb_path_router.js'

const path = require('path')
const __dirname = require('./learndb_path_router.js')
const newRouter = require('./learndb_path_router.js')
const routerLogin = newRouter

routerLogin.get('/login', (req, res) => {
    res.render(path.join(__dirname, '../static/html/login'), { status: "" })
})

routerLogin.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
    (req, res) => {
        res.render(path.join(__dirname, '../static/html/index'), { status: req.flash('message') })
    });
module.exports = routerLogin
// export default routerHome
