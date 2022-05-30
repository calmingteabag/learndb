const path = require('path')
const url = require('url')
const passport = require('passport')
const googleModel = require('../db/db_users.js')
const GoogleStrategy = require('passport-google-oauth20')


async function syncDb() {
    await googleModel.sync()
}
syncDb()
console.log(path.join(__dirname, '../../google_auth'))
passport.use(new GoogleStrategy({


    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: "http://localhost:8000/google_auth",
    callbackURL: path.join(__dirname, '../../google_auth')
},
    async (accessToken, refreshToken, profile, done) => {
        await googleModel.sync()
        const profileID = profile.id
        const profileIDString = profileID.toString()
        googleModel.sync()
        const findUser = await googleModel.findOne({
            where: {
                google_id: profileIDString
            }
        })

        if (!findUser) {
            const putUser = await googleModel.create({
                google_id: profileIDString,
                name: profile.displayName,
                email: profile.emails[0].value
            })
            putUser.save()
        } else {
            done(null, findUser)
        }
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