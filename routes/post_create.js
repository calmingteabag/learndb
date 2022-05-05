import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { Router } from 'express'
import learndbModel from '../db/db_model.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerCreate = Router()
learndbModel.sync()

routerCreate.use(express.static(path.join(__dirname, '../', '/static')))
routerCreate.use(express.urlencoded({ extended: true }))

routerCreate.post('/db_create_entry', (req, res) => {
    (async () => {

        let dbTech = req.body.db_technology
        let dbSubject = req.body.db_subject
        let dbTags = req.body.db_tags
        let dbDescription = req.body.db_description

        const [waifuEntry, created] = await learndbModel.findOrCreate({
            where: {
                technology: dbTech,
                subject: dbSubject
            },
            defaults: {
                techonology: dbTech,
                subject: dbSubject,
                tags: dbTags,
                description: dbDescription
            }
        })

        if (created) {
            res.render(path.join(__dirname, '../static/html/index'), {
                technology: dbTech,
                subject: dbSubject,
                description: dbDescription,
                statusMsg: "entry created"
            })
        } else {
            res.render(path.join(__dirname, '../static/html/index'), {
                technology: '',
                subject: '',
                description: '',
                statusMsg: "Entry already exists"

            })
        }
    })()
})

export default routerCreate