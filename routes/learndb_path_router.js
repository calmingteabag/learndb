// import path from 'path'
// import { Router } from 'express'
// import { fileURLToPath } from 'url'
// import express from 'express'

const path = require('path')
const Router = require('express')
const fileURLToPath = require('url')
const express = require('express')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const newRouter = Router()
newRouter.use(express.static(path.join(__dirname, '../static')))
newRouter.use(express.urlencoded({ extended: true }))

// export { __dirname, newRouter }
module.exports = __dirname
module.exports = newRouter