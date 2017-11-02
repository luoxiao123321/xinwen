var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'xinwen'
})
/* GET home page. */
router.post('/list',function(req,res,next){
	var a=req.body.uid
	res.header('Access-Control-Allow-Origin','*')
	pool.query('SELECT title,name,uid FROM xin',function(err,rows){
		res.send(rows)
	})
})
router.post('/insert',function(req,res,next){
	var aa=req.body.title
	var bb=req.body.name
	var cc=req.body.center
	var dd=req.body.uid
	res.header('Access-Control-Allow-Origin','*')
	pool.query('INSERT INTO xin (title,name,center,uid) VALUES ("'+aa+'","'+bb+'","'+cc+'","'+dd+'")',function(err,rows){
		res.send(rows)
	})
})
module.exports = router;
