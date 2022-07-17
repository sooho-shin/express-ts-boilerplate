import express from 'express'
import apiRouter from './api'

const indexRouter = express.Router()

indexRouter.use(apiRouter)

export default indexRouter
