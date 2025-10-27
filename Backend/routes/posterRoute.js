import express from 'express'
import { createPost, getAllPosts } from '../controller/posterController.js'

const posterRoute = express.Router()

posterRoute.post('/create', createPost)
posterRoute.get('/get', getAllPosts)

export default posterRoute;