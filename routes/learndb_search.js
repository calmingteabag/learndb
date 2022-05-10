import path from 'path'
import { learndbModel } from '../db/db_model.js'
import { __dirname, newRouter } from './learndb_path_router.js'
import { Op } from 'sequelize'

const routerSearch = newRouter

learndbModel.sync()

routerSearch.get('/db_view_all', (req, res) => {
    try {
        (async () => {
            const learndbFindAll = await learndbModel.findAll()

            res.render(path.join(__dirname, '../static/html/results'), { dbResults: JSON.parse(JSON.stringify(learndbFindAll)), status: "All" })
            console.log(JSON.parse(JSON.stringify(learndbFindAll)))
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

            let parserer = JSON.parse(JSON.stringify(userSearchResult))
            console.log(parserer)
            res.render(path.join(__dirname, '../static/html/results'), { dbResults: JSON.parse(JSON.stringify(userSearchResult)), status: userSearch })

        } catch (err) {
            console.log(err)
        }
    })()
})

export default routerSearch