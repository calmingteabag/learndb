import path from 'path'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerHome = newRouter

routerHome.get('/', (req, res) => {
    learnDbHTMLRender(
        req,
        res,
        path.join(__dirname, '../static/html/index'),
        '',
        '',
        '',
        ''
    )
})

export default routerHome