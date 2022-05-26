const passport = require('passport')
const userModel = require('../db/db_users.js')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const { hash } = require('bcrypt')

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
            }
        })

        if (!getUser) {
            done(null, false, req.flash('message', 'user not found'))
        } else {
            bcrypt.compare(password, getUser.getDataValue('password'), (err, result) => {
                console.log(result)
                if (err) {
                    done(err, false, req.flash('message', err))
                } else if (result == false) {
                    done(null, false, req.flash('message', 'password does not match'))
                }

                done(null, getUser, req.flash('message', 'success login'))

            })
        }
    }
))

module.exports = passport