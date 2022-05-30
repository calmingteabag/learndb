const path = require('path')
const learndbModel = require('../db/db_model.js')
const newRouter = require('./learndb_path_router.js')

const routerDelete = newRouter
// learndbModel.sync()

const authCheck = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.render(path.join(__dirname, '../static/html/login'), { status: "you didn't have permission to access '/access' page so we redirect you here" })
}

routerDelete.post('/db_delete_entry', authCheck, (req, res) => {
    (async () => {
        await learndbModel.sync()
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

module.exports = routerDelete