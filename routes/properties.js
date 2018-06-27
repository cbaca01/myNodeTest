var express = require('express');
var request = require('request');
var app = express.Router();

module.exports = function(app) {
	this.route = '/properties';

	app.get(this.route, function(req, res, next) {
		res.write('we are in the properties section!!');
		res.end();
	});

	app.get(this.route + '/getProperty/:propertyID', function(req, res, next) {
		//  retrieve request & return json
		request.get({ url: 'http://rq.local.com/books/getBook/' +  req.params.propertyID}, function(error, response, body) {
			res.json(JSON.parse(body));
		});
		// res.write('we are creating our books: ' + req.params.bookID);
		// res.end();
	});

	return app;
};