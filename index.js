// import routerHome from './routes/learndb_home.js'
// import routerCreate from './routes/learndb_entry_create.js'
// import routerSearch from './routes/learndb_search.js'
// import routerDelete from './routes/learndb_delete.js'
// import routerUpdate from './routes/learndb_update.js'
// import routerRegister from './routes/learndb_register.js'
// import routerLogin from './routes/learndb_login.js'
// import express from 'express'
// import path from 'path'
// import { Router } from 'express'
// import { fileURLToPath } from 'url'

const routerHome = require('./routes/learndb_home.js')
const routerCreate = require('./routes/learndb_entry_create.js')
const routerSearch = require('./routes/learndb_search.js')
const routerDelete = require('./routes/learndb_delete.js')
const routerUpdate = require('./routes/learndb_update.js')
const routerRegister = require('./routes/learndb_register.js')
const routerLogin = require('./routes/learndb_login.js')
const express = require('express')
const path = require('path')
const Router = require('express')
const fileURLToPath = require('url')
const session = require('express-session')
const passport = require('./auth/passport.js')
const flash = require('connect-flash')
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
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

