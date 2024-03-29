const path = require('path')
const learndbModel = require('../db/db_model.js')
const newRouter = require('./learndb_path_router.js')
const routerCreate = newRouter

const authCheck = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/google_login')
}

routerCreate.get('/db_create_entry', authCheck, async (req, res) => {
    try {
        res.render(path.join(__dirname, '../static/html/create'), { status: "" })
    } catch (err) {
        console.log(err)
    }
})

routerCreate.post('/db_create_entry', authCheck, (req, res) => {
    (async () => {
        try {
            learndbModel.sync()
            let dbTech = req.body.db_technology
            let dbSubject = req.body.db_subject
            let dbTags = req.body.db_tags
            let dbDescription = req.body.db_description

            if (dbTech == '' || dbSubject == '') {
                res.render(path.join(__dirname, '../static/html/create'), {
                    status: "Please fill Tech and Subject fields"
                })
            } else {
                const [newEntry, created] = await learndbModel.findOrCreate({
                    where: {
                        technology: dbTech,
                        subject: dbSubject
                    },
                    defaults: {
                        userId: req.session.passport.user,
                        technology: dbTech,
                        subject: dbSubject,
                        tags: dbTags,
                        description: dbDescription
                    }
                })

                if (created) {
                    res.render(path.join(__dirname, '../static/html/create'), {
                        status: `Created entry with following data: ${dbTech}, ${dbSubject}. Tags added: ${dbTags}. Description as follows: ${dbDescription}`
                    })
                } else {
                    res.render(path.join(__dirname, '../static/html/create'), {
                        status: `Entry ${dbTech} and ${dbSubject} subject already exists`
                    })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })()
})
module.exports = routerCreate