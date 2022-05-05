import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { Router } from 'express'
import learndbModel from '../db/db_model.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerView = Router()
learndbModel.sync()

routerView.use(express.static(path.join(__dirname, '../', '/static')))
routerView.use(express.urlencoded({ extended: true }))

routerView.post('/db_view', (req, res) => {
    (async () => {

        // need search on tag fields
        const dbSearch = await waifuModel.findAll()



        res.render(path.join(__dirname, '../static/html/index'), {
            technology: dbTech,
            subject: dbSubject,
            description: dbDescription,
            statusMsg: "entry created"
        })
    })()
})

export default routerView