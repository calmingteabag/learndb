import path from 'path'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerHome = newRouter

routerHome.get('/', (req, res) => {
    try {
        res.render(path.join(__dirname, '../static/html/index'), { status: "" })

    } catch (err) {
        console.log(err)
    }
})

export default routerHome