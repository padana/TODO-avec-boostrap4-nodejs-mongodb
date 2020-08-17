const express = require('express')
const bodyParser = require('body-parser')
const route = express.Router()
const getIndexControlller = require('../controllers/index')

const urlencodedParser = bodyParser.urlencoded({ extended: false })


route.get('/', getIndexControlller.getIndex)
route.post('/ajouter', urlencodedParser, getIndexControlller.postIndex)

route.delete('/supprimer/:id', urlencodedParser, getIndexControlller.delePost)

module.exports = route