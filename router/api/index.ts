import express from 'express'
import asyncHandler from 'express-async-handler'
const apiRouter = express.Router()

apiRouter.get(
  '/testApi',
  asyncHandler(async (req, res) => {
    res.json({ user: 'sooho', id: 'soojoon92@gmail.com' })
  }),
)

export default apiRouter
