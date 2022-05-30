const path = require('path')
const learndbModel = require('../db/db_model.js')
const newRouter = require('./learndb_path_router.js')
const Op = require('sequelize')

const routerSearch = newRouter

const authCheck = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/google_login')
}

routerSearch.get('/db_view_all', authCheck, (req, res) => {
    try {
        (async () => {
            await learndbModel.sync()

            const learndbFindAll = await learndbModel.findAll({
                where: {
                    userId: req.session.passport.user

                }
            })
            res.render(path.join(__dirname, '../static/html/results'), { dbResults: JSON.parse(JSON.stringify(learndbFindAll)), status: "All" })
        })()
    } catch (err) {
        console.log(err)
    }
})

routerSearch.post('/db_search', authCheck, (req, res) => {
    (async () => {
        try {
            await learndbModel.sync()
            let userSearch = req.body.search_items
            let userSearchArr = userSearch.split(' ')
            let userSearchResult = await learndbModel.findAll({
                where: {
                    technology: {
                        [Op.in]: userSearchArr
                    }
                }
            })

            res.render(path.join(__dirname, '../static/html/results'), { dbResults: JSON.parse(JSON.stringify(userSearchResult)), status: userSearch })

        } catch (err) {
            console.log(err)
        }
    })()
})

module.exports = routerSearch