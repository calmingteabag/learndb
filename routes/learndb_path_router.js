const path = require('path')
// const Router = require('express')
const express = require('express')
const newRouter = express.Router()
const flash = require('connect-flash')



// const newRouter = Router()
newRouter.use(express.static(path.join(__dirname, '../static')))
newRouter.use(express.urlencoded({ extended: true }))
newRouter.use(flash())

module.exports = newRouter