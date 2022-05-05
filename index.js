import routerHome from './routes/home.js'
import routerCreate from './routes/post_create.js'
import routerView from './routes/post_view.js'
import routeGet from './routes/get.js'
import express from 'express'

const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(routerHome)
app.use(routerCreate)
app.use(routerView)
app.use(routeGet)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

