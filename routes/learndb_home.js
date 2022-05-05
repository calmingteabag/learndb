import express from 'express'
import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerHome = Router()

routerHome.use(express.static(path.join(__dirname, '../', '/static')))
routerHome.use(express.urlencoded({ extended: true }))

routerHome.get('/', (req, res, next) => {
    res.render(path.join(__dirname, '../static/html/index'), {
        technology: '',
        subject: '',
        description: '',
        statusMsg: '',
    })
})

export default routerHome