import path from 'path'
import learndbModel from '../db/db_model.js'
import { learnDbHTMLRender } from './learndb_render_html.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerCreate = newRouter
learndbModel.sync()

routerCreate.get('/db_create_entry', (req, res) => {
    (async () => {
        await learnDbHTMLRender(req, res, path.join(__dirname, '../static/html/create'), '')
    })()
})

routerCreate.post('/db_create_entry', (req, res) => {
    (async () => {
        try {
            let dbTech = req.body.db_technology
            let dbSubject = req.body.db_subject
            let dbTags = req.body.db_tags
            let dbDescription = req.body.db_description

            if (dbTech == '' || dbSubject == '') {
                await learnDbHTMLRender(
                    req,
                    res,
                    path.join(__dirname, '../static/html/create'),
                    "Please fill Tech and Subject fields"
                )
            } else {
                const [waifuEntry, created] = await learndbModel.findOrCreate({
                    where: {
                        technology: dbTech,
                        subject: dbSubject
                    },
                    defaults: {
                        technology: dbTech,
                        subject: dbSubject,
                        tags: dbTags,
                        description: dbDescription
                    }
                })

                if (created) {
                    await learnDbHTMLRender(
                        req,
                        res,
                        path.join(__dirname, '../static/html/create'),
                        `Created entry with following data: ${dbTech}, ${dbSubject}. Tags added: ${dbTags} `
                    )
                } else {
                    await learnDbHTMLRender(
                        req,
                        res,
                        path.join(__dirname, '../static/html/create'),
                        `Entry ${dbTech} and ${dbSubject} subject already exists`
                    )
                }
            }
        } catch (err) {
            console.log(err)
        }

    })()
})

export default routerCreate