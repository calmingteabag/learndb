import route_a from './routes/routes.js'
import express from 'express'

import path from 'path'
import { fileURLToPath } from 'url'

// const fullpath = fileURLToPath(import.meta.url)
// console.log(`Full path to file: ${fullpath}`)
// const pathfile = path.dirname(fullpath)
// console.log(`Path to File: ${pathfile}`)

// console.log(import.meta.url)

const app = express()
const port = 8000

app.use(route_a)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})