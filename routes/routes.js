import express from 'express'
import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const router = Router()

router.use(express.static(path.join(__dirname, '../', '/static')))

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../static/html/index.html'));
})

router.get('/waifu', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../static/img/waifu.jpg'))
})

export default router