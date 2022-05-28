const path = require('path')
const newRouter = require('./learndb_path_router.js')
const routerHome = newRouter

routerHome.get('/', (req, res) => {
    res.render(path.join(__dirname, '../static/html/index'), { status: "" })
})

module.exports = routerHome