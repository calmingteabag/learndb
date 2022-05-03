import route_a from './routes/routes.js'
import express from 'express'

const app = express()
const port = 8000

app.use(route_a)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})