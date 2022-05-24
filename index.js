import routerHome from './routes/learndb_home.js'
import routerCreate from './routes/learndb_entry_create.js'
import routerSearch from './routes/learndb_search.js'
import routerDelete from './routes/learndb_delete.js'
import routerUpdate from './routes/learndb_update.js'
import express from 'express'

import path from 'path'
import { Router } from 'express'

const newRouter = Router()

newRouter.use(express.static(path.join(__dirname + '/static')))
newRouter.use(express.urlencoded({ extended: true }))

const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(routerHome)
app.use(routerCreate)
app.use(routerSearch)
app.use(routerDelete)
app.use(routerUpdate)
app.use(routerRegister)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

