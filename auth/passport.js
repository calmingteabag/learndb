const passport = require('passport')
const userModel = require('../db/db_users.js')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    userModel.findByPk(id, (err, user) => {
        done(err, user)
    })
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    async (req, email, password, done) => {
        const getUser = await userModel.findOne({
            where: {
                email: email,
                password: password
            }
        })
        if (!getUser) {
            done(null, false, req.flash('errmsg', 'user not found'))
        } else if (password != getUser.password) {
            done(null, false, req.flash('errmsg', 'pass incorrect'))
        } else {
            done(null, getUser, req.flash('message', 'success login'))
        }
    }
))

module.exports = passport