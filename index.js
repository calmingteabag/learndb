import route_a from './routes/routes.js'
import express from 'express'
const app = express()

app.use(route_a)

app.listen(3000, () => {
    console.log("app running")
})