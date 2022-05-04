import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { Router } from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerGet = Router()

routerGet.use(express.static(path.join(__dirname, '../', '/static')))
routerGet.use(express.urlencoded({ extended: true }))

routerGet.get('/dbrequest', (req, res, next) => {

    res.render(path.join(__dirname, '../', '/static/html/index'), { waifu: "maiWaifu" })
})

export default routerGet