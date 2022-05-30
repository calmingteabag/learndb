const path = require('path')
const newRouter = require('./learndb_path_router.js')
const routerSearch = require('./learndb_search.js')
const routerLogout = newRouter

routerLogout.get('/logout', (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            res.render(path.join(__dirname, '../static/html/index'), { status: "Your are not logged in" })
        }
        req.logout()
        res.render(path.join(__dirname, '../static/html/index'), { status: "Successful logout" })
    } catch (err) {
        console.log(err)
    }
})

module.exports = routerLogout