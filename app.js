const express = require('express')
const app = express()

const routes = require('./routes/routes.js')

const port = process.env.PORT || 8080

app.set('view engine', 'pug')

app.use(express.static('public'))

routes(app)

app.listen(port, function(){

	console.log('Online!')
	
})