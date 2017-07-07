const express = require('express')
const routes = require('./routes/views')
const path = require('path')
const app = express()
require('dotenv').config({path: './config/.env'})

app.set('view engine', 'pug')
app.locals.basedir = path.join(__dirname, 'views')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`)
})
