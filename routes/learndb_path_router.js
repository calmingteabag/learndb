const path = require('path')
const Router = require('express')
const express = require('express')

const newRouter = Router()
newRouter.use(express.static(path.join(__dirname, '../static')))
newRouter.use(express.urlencoded({ extended: true }))

module.exports = newRouter