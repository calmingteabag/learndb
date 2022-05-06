import path from 'path'
import learndbModel from '../db/db_model.js'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerCreate = newRouter
learndbModel.sync()

routerCreate.post('/db_create_entry', (req, res) => {
    (async () => {

        let dbTech = req.body.db_technology
        let dbSubject = req.body.db_subject
        let dbTags = req.body.db_tags
        let dbDescription = req.body.db_description

        if (dbTech == '' || dbSubject == '') {
            learnDbHTMLRender(
                req,
                res,
                path.join(__dirname, '../static/html/search'),
                "Please fill Tech and Subject fields"
            )
        } else {
            const [waifuEntry, created] = await learndbModel.findOrCreate({
                where: {
                    technology: dbTech,
                    subject: dbSubject
                },
                defaults: {
                    techonology: dbTech,
                    subject: dbSubject,
                    tags: dbTags,
                    description: dbDescription
                }
            })

            if (created) {
                learnDbHTMLRender(
                    req,
                    res,
                    path.join(__dirname, '../static/html/search'),
                    `Created entry with following data: ${dbTech}, ${dbSubject}. Tags added: ${dbTags} `
                )
            } else {
                learnDbHTMLRender(
                    req,
                    res,
                    path.join(__dirname, '../static/html/search'),
                    `Entry ${dbTech} and ${dbSubject} subject already exists`
                )
            }
        }
    })()
})

export default routerCreate