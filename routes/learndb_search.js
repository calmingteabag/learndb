// import path from 'path'
// import { learndbModel } from '../db/db_model.js'
// import { __dirname, newRouter } from './learndb_path_router.js'
// import { Op } from 'sequelize'

const path = require('path')
const learndbModel = require('../db/db_model.js')
const newRouter = require('./learndb_path_router.js')
const Op = require('sequelize')

const routerSearch = newRouter

learndbModel.sync()

routerSearch.get('/db_view_all', (req, res) => {
    try {
        (async () => {
            const learndbFindAll = await learndbModel.findAll()
            res.render(path.join(__dirname, '../static/html/results'), { dbResults: JSON.parse(JSON.stringify(learndbFindAll)), status: "All" })
        })()
    } catch (err) {
        console.log(err)
    }
})

routerSearch.post('/db_search', (req, res) => {
    (async () => {
        try {
            let userSearch = req.body.search_items
            let userSearchArr = userSearch.split(' ')
            let userSearchResult = await learndbModel.findAll({
                where: {
                    technology: {
                        [Op.in]: userSearchArr
                    }
                }
            })

            res.render(path.join(__dirname, '../static/html/results'), { dbResults: JSON.parse(JSON.stringify(userSearchResult)), status: userSearch })

        } catch (err) {
            console.log(err)
        }
    })()
})
module.exports = routerSearch
// export default routerSearch