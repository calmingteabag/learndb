import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { Router } from 'express'
import sequelize from '../db/db_conn.js'
import waifuModel from '../db/db_model.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerPost = Router()

routerPost.use(express.static(path.join(__dirname, '../', '/static')))
routerPost.use(express.urlencoded({ extended: true }))

routerPost.post('/test', (req, res) => {
    // test retrieving data from db
    (async () => {

        const findAllWaifus = await waifuModel.findAll()
        console.log("we found these waifus")
        for (let elem of findAllWaifus) {
            console.log(elem.name)
            console.log(elem.height)
        }

    })()

    // test form request info
    let waifuName = req.body.waifu_name
    let waifuHeight = req.body.waifu_height
    console.log(waifuName, waifuHeight)
    res.render(path.join(__dirname, '../static/html/index'), { waifu: "maiWaifu" })
})

export default routerPost