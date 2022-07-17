// import express from 'express'
// const express = require('express')
import express, { Request, Response } from 'express'
// const asyncHandler = require('express-async-handler')
import indexRouter from './router'

const app = express()
const port = 3100

app.use('/', indexRouter)
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
