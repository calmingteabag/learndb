import path from 'path'
import learndbModel from '../db/db_model.js'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerSearch = newRouter
learndbModel.sync()

routerSearch.get('/db_view_all', (req, res) => {
    (async () => {
        const learndbFindAll = await learndbModel.findAll()

        let learndbEntries = []
        for (let elem of learndbFindAll) {
            learndbEntries.push(elem.technology)
        }

        learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/results'), learndbEntries)
    })()
})

routerSearch.post('/db_search', (req, res) => {
    (async () => {
        const userSearch = req.body.search_result
        const learndbFindAll = await learndbModel.findAll()
        /* 
        Post.findAll({
            where: {
                your_column_name: { 
                    [Op.or]: [12, 13] //search operators 
                }
            }
        });
        */
        learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/results'), userSearch)
    })()
})

export default routerSearch