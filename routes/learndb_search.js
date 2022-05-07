import path from 'path'
import learndbModel from '../db/db_model.js'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'
import { Op } from 'sequelize'

const routerSearch = newRouter
learndbModel.sync()

routerSearch.get('/db_view_all', (req, res) => {
    try {
        (async () => {
            const learndbFindAll = await learndbModel.findAll()

            let learndbEntries = []
            for (let elem of learndbFindAll) {
                learndbEntries.push(elem.technology)
            }

            await learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/results'), learndbEntries)
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

            await learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/results'), userSearchResult)
            // should be changed to learnDbHTMLRenderResult instead

        } catch (err) {
            console.log(err)
        }
    })()
})

export default routerSearch