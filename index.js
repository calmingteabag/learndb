import routes from './routes/routes.js'
import express from 'express'

const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(routes)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

