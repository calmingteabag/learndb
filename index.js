// System
const path = require('path')
// Routers
const routerHome = require('./routes/learndb_home.js')
const routerCreate = require('./routes/learndb_entry_create.js')
const routerSearch = require('./routes/learndb_search.js')
const routerDelete = require('./routes/learndb_delete.js')
const routerUpdate = require('./routes/learndb_update.js')
const routerLogin = require('./routes/learndb_login.js')
const routerLogout = require('./routes/learndb_logout.js')
// Express / Passport 
const express = require('express')
const session = require('express-session')
const passport = require('./auth/passport.js')
const app = express()
const port = process.env.PORT || 8000
// Security
const crypto = require('crypto')

app.set('views', path.join(__dirname, '/static/html'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: crypto.randomBytes(10).toString('hex'),
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(routerHome)
app.use(routerCreate)
app.use(routerSearch)
app.use(routerDelete)
app.use(routerUpdate)
app.use(routerLogin)
app.use(routerLogout)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

