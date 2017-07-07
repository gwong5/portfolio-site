const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.render('index')
})

router.get('/profile', (request, response) => {
  response.render('profile')
})

router.get('/contact', (request, response) => {
  response.render('contact')
})

module.exports = router
