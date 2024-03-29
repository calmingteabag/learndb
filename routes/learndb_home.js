const path = require('path')
const newRouter = require('./learndb_path_router.js')
const routerHome = newRouter

routerHome.get('/', (req, res) => {
    try {
        res.render(path.join(__dirname, '../static/html/index'), { status: "" })
    } catch (err) {
        console.log(err)
    }
})

module.exports = routerHome