import path from 'path'
import { learndbModel } from '../db/db_model.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerDelete = newRouter
learndbModel.sync()

routerDelete.post('/db_delete_entry', (req, res) => {
    (async () => {
        let deleteId = req.body.db_delete
        let deleteColumn = await learndbModel.findByPk(deleteId)

        if (deleteId) {
            await learndbModel.destroy({
                where: { id: deleteId }
            })

            res.render(path.join(__dirname, '../static/html/index'), {
                status: `Entry "${deleteColumn.technology}", "${deleteColumn.subject}" was removed`
            })
        } else {

            res.render(path.join(__dirname, '../static/html/index'), {
                status: "There is nothing to delete"
            })
        }
    })()
})

export default routerDelete