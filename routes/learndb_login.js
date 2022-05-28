const path = require('path')
const passport = require('../auth/passport.js')
const newRouter = require('./learndb_path_router.js')
const routerLogin = newRouter

routerLogin.get('/google_auth',
    passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
    function (req, res) {
        res.redirect('/');
    });

routerLogin.get('/google_login', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

module.exports = routerLogin

