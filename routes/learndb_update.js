import path from 'path'
import { learndbModel } from '../db/db_model.js'
import { __dirname, newRouter } from './learndb_path_router.js'

const routerUpdate = newRouter
learndbModel.sync()

routerUpdate.post('/db_update_entry_fill', (req, res) => {
    (async () => {
        try {
            let dbEntryId = req.body.db_update_id
            let dbEntryGetRow = await learndbModel.findByPk(dbEntryId)

            res.render(path.join(__dirname, '../static/html/update'),
                {
                    dbUpdateEntries: {
                        tech: dbEntryGetRow.technology,
                        subject: dbEntryGetRow.subject,
                        tags: dbEntryGetRow.tags,
                        description: dbEntryGetRow.description,
                        status: 'show curr values'
                    }
                })

        } catch (err) {
            console.log(err)
        }

    })()
})

routerUpdate.post('/db_update_entry', (req, res) => {
    (async () => {
        try {
            let dbTech = req.body.db_technology
            let dbSubject = req.body.db_subject
            let dbTags = req.body.db_tags
            let dbDescription = req.body.db_description

            const dbToUpdateEntry = await learndbModel.findOne({
                where: {
                    technology: dbTech,
                    subject: dbSubject
                }
            })

            dbToUpdateEntry.technology = dbTech
            dbToUpdateEntry.subject = dbSubject
            dbToUpdateEntry.tags = dbTags
            dbToUpdateEntry.description = dbDescription

            dbToUpdateEntry.save()

            res.render(path.join(__dirname, '../static/html/index'), { status: "Entry Updated" })

        } catch (err) {
            console.log(err)
        }
    })()
})

export default routerUpdate