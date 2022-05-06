import path from 'path'
import learndbModel from '../db/db_model.js'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerSearch = newRouter
learndbModel.sync()

routerSearch.get('/db_view_all', (req, res, next) => {
    (async () => {
        const learndbFindAll = await learndbModel.findAll()

        let learndbEntries = []
        for (let elem of learndbFindAll) {
            learndbEntries.push(elem.technology)
        }

        learnDbHTMLRender(
            req,
            res,
            path.join(__dirname, '../static/html/index'),
            '',
            '',
            '',
            learndbEntries
        )
    })()
})

routerSearch.get('/db_view_query', (req, res, next) => {
    (async () => {
        const learndbFindAll = await learndbModel.findAll()
        /* 
        find(All) needs (obviously) to be switched for another
        query method.

        It should search through 'tags' columns and return results
        */

        let learndbEntries = []
        for (let elem of learndbFindAll) {
            learndbEntries.push(elem.technology)
        }

        learnDbHTMLRender(
            req,
            res,
            path.join(__dirname, '../static/html/index'),
            '',
            '',
            '',
            learndbEntries
        )
    })()
})

export default routerSearch