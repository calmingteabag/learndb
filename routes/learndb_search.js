import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { Router } from 'express'
import learndbModel from '../db/db_model.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerSearch = Router()

routerSearch.use(express.static(path.join(__dirname, '../', '/static')))
routerSearch.use(express.urlencoded({ extended: true }))

routerSearch.get('/db_view', (req, res, next) => {
    (async () => {

        const learndbFindAll = await learndbModel.findAll()

        let learndbEntries = []
        for (let elem of learndbFindAll) {
            learndbEntries.push(elem.technology)
        }

        res.render(path.join(__dirname, '../', '/static/html/index'), {
            technology: '',
            subject: '',
            description: learndbEntries,
            statusMsg: ''
        })
    })()


})

export default routerSearch