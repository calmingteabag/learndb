import routerHome from './routes/learndb_home.js'
import routerCreate from './routes/learndb_entry_create.js'
import routerSearch from './routes/learndb_search.js'
import express from 'express'

import path from 'path'
import { Router } from 'express'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const newRouter = Router()

newRouter.use(express.static(path.join(__dirname + '/static')))
newRouter.use(express.urlencoded({ extended: true }))

const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(routerHome)
app.use(routerCreate)
app.use(routerSearch)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

