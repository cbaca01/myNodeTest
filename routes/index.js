var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: 'Express - My App!!!' });
});

/* TEST function */
/*
router.get('/testService/:bookID', function(req, res, next) {
	//  retrieve request & return json
	request.get({ url: 'http://mrsd-dev.local.com/roles/getAll/'}, function(error, response, body) {
		res.json(JSON.parse(body));
	});
});
*/

module.exports = router;