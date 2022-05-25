const path = require('path')
require('dotenv').config({ path: __dirname + '/.env' })

const routerHome = require('./routes/learndb_home.js')
const routerCreate = require('./routes/learndb_entry_create.js')
const routerSearch = require('./routes/learndb_search.js')
const routerDelete = require('./routes/learndb_delete.js')
const routerUpdate = require('./routes/learndb_update.js')
const routerRegister = require('./routes/learndb_register.js')
const routerLogin = require('./routes/learndb_login.js')
const express = require('express')
const Router = require('express')
const session = require('express-session')
const passport = require('./auth/passport.js')
const flash = require('connect-flash')
const newRouter = Router()

newRouter.use(express.static(path.join(__dirname + '/static')))
newRouter.use(express.urlencoded({ extended: true }))

const app = express()
const port = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(flash())
app.use(session({
    secret: '123',
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
app.use(routerRegister)
app.use(routerLogin)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

