import routeHome from './routes/home.js'
import routePost from './routes/post.js'
import routeGet from './routes/get.js'
import express from 'express'

const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(routeHome)
app.use(routePost)
app.use(routeGet)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})

