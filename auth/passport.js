const path = require('path')
const url = require('url')
const passport = require('passport')
const googleModel = require('../db/db_users.js')
const GoogleStrategy = require('passport-google-oauth20')


console.log(path.join(__dirname, '../../google_auth'))
passport.use(new GoogleStrategy({


    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: "http://localhost:8000/google_auth",
    callbackURL: path.join(__dirname, '../../google_auth')
},
    async (accessToken, refreshToken, profile, done) => {
        googleModel.sync()
        const profileID = profile.id
        const profileIDString = profileID.toString()

        const [newUser, created] = await googleModel.findOrCreate({
            where: {
                google_id: profileIDString,
            },
            defaults: {
                name: profile.displayName,
                email: profile.emails[0].value
            }
        })

        done(null, newUser)
    }
));

passport.serializeUser((user, done) => {
    done(null, user.google_id)
})

passport.deserializeUser((id, done) => {
    let user = googleModel.findOne({
        where: {
            google_id: id
        }
    })
    done(null, user)
})

module.exports = passport