import express from 'express'
import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'


const newRouter = Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
newRouter.use(express.static(path.join(__dirname, '../static')))
newRouter.use(express.urlencoded({ extended: true }))

test('Check __dirname', () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    expect(__dirname).toBe('D:\\Programming\\Web\\learndb\\tests')
})

// test('check parameters', () => {
//     expect(2 + 2).toBe(4)
// })
// test('comi sua mae', () => {
//     expect('suamae').toBe('suamae')
// })