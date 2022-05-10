import path from 'path'
import { learndbModel } from '../db/db_model.js'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerDelete = newRouter
learndbModel.sync()

routerDelete.post('/db_delete_entry', (req, res) => {
    (async () => {
        // console.log(req.body)
        let deleteId = req.body.db_delete
        let deleteColumn = await learndbModel.findByPk(deleteId)

        if (deleteId) {
            await learndbModel.destroy({
                where: { id: deleteId }
            })
            await learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/index'), `Entry "${deleteColumn.technology}", "${deleteColumn.subject}" was removed`)
        } else {
            await learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/index'), "There is nothing to delete")
        }


    })()
})

export default routerDelete