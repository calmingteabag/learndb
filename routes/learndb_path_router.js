// import path from 'path'
// import { Router } from 'express'
// import { fileURLToPath } from 'url'
// import express from 'express'

const path = require('path')
const Router = require('express')
const express = require('express')

const newRouter = Router()
newRouter.use(express.static(path.join(__dirname, '../static')))
newRouter.use(express.urlencoded({ extended: true }))

// export { __dirname, newRouter }
module.exports = newRouter