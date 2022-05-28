const path = require('path')
const express = require('express')
const newRouter = express.Router()
const flash = require('connect-flash')

newRouter.use(express.static(path.join(__dirname, '../static')))
newRouter.use(express.urlencoded({ extended: true }))
newRouter.use(flash())

module.exports = newRouter