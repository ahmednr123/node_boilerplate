var express = require('express')
var app = express()

var redis = require('redis')
var db = redis.createClient()

app.set('view engine', 'jade')

db.on('connect', function(){
	console.log('Database Connected')
})

db.on('error', function(err){
	console.log('Error' + err)
})

app.use('/', function(req, res){
	res.render('Hello bruh!')
})

app.listen('8080', function(){
	console.log('Online!')
})