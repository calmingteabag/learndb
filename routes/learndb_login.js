const path = require('path')
const passport = require('../auth/passport.js')
const newRouter = require('./learndb_path_router.js')
const routerLogin = newRouter

routerLogin.get('/login', (req, res) => {
    res.render(path.join(__dirname, '../static/html/login'), { status: "" })
})

routerLogin.get('/loginfailure', (req, res) => {
    res.render(path.join(__dirname, '../static/html/login'), { status: req.flash('message') })
})

routerLogin.post('/login',
    passport.authenticate('local', {
        // failureFlash: true,
        failureRedirect: '/loginfailure',
        failureMessage: true,
    }),
    (req, res) => {
        // res.redirect('/')
        console.log("turtlesss!")
        res.render(path.join(__dirname, '../static/html/index'), { status: 'success login' })
    });

module.exports = routerLogin

