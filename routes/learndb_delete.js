import path from 'path'
import { learndbModel } from '../db/db_model.js'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerDelete = newRouter
learndbModel.sync()

routerDelete.post('/db_delete_entry', (req, res) => {
    (async () => {
        console.log(req.body)
        let deletedEntry = req.body.db_delete
        await learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/index'), deletedEntry)

    })()
})

export default routerDelete