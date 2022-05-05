import path from 'path'
import learndbModel from '../db/db_model.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerSearch = newRouter

routerSearch.get('/db_view', (req, res, next) => {
    (async () => {

        const learndbFindAll = await learndbModel.findAll()

        let learndbEntries = []
        for (let elem of learndbFindAll) {
            learndbEntries.push(elem.technology)
        }

        res.render(path.join(__dirname, '../', '/static/html/index'), {
            technology: '',
            subject: '',
            description: learndbEntries,
            statusMsg: ''
        })
    })()
})

export default routerSearch