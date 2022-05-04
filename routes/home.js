import express from 'express'
import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const routerHome = Router()

routerHome.use(express.static(path.join(__dirname, '../', '/static')))
routerHome.use(express.urlencoded({ extended: true }))

routerHome.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../static/html/index.html'));
    res.render(path.join(__dirname, '../static/html/index'), { waifu: "maiWaifu" })
})

routerHome.get('/waifu', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../static/img/waifu.jpg'))
})


/* 
In python, post requests ar handled by view functions using 'if method=post'

Here what we'll do is handle it with app.post.
HTML method should be POST (for obvious reasons) and action should point to
desired app.post endpoint.

example:
<form method="POST" action="/learned_stuff">
  <input type="text" name="learned_entries"/>
  <input type="submit" />
</form>

app.post('/learned_stuff, (req, res) => {
    const learnedStuff = req.body.learned_entries
    // process data, add to databases, etc
})
*/

export default routerHome