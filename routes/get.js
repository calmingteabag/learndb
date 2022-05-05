import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { Router } from 'express'
import waifuModel from '../db/db_model.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerGet = Router()

routerGet.use(express.static(path.join(__dirname, '../', '/static')))
routerGet.use(express.urlencoded({ extended: true }))

routerGet.get('/dbview', (req, res, next) => {
    (async () => {

        const waifuFindAll = await waifuModel.findAll()
        console.log("we found these waifus")
        let listName = []
        let listHeight = []
        for (let elem of waifuFindAll) {
            listName.push(elem.name)
            listHeight.push(elem.height)

            console.log(elem.name)
            console.log(elem.height)
        }

        res.render(path.join(__dirname, '../', '/static/html/index'), {
            waifunames: listName,
            waifuheight: listHeight,
            waifumsg: ''
        })
    })()


})

export default routerGet