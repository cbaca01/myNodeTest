var express = require('express');
var request = require('request');
var EventEmitter = require('events').EventEmitter;
var app = express.Router();

module.exports = function(app) {
	this.route = '/test_route';

	this.books = {};
	this.globalsClass = new globals();

	self = this;

	app.use(this.route, function(req, res, next) {

		// Make Call
		this.returnDataSet = function(dataSet) {
			var returnValues = {title: 'RQ Login', 'books': dataSet};
			
			res.render('login', returnValues);
			return;
		};

		// Execute service
		self.globalsClass.execService(request, 'http://mrsd-dev.local.com/roles/getAll', this.returnDataSet);
	});

/*
	app.use(this.route, function(req, res, next) {
		// res.write('we are in the login section - SO LOG IN!');
		myValue = new EventEmitter();

		this.myRequest = function()	{
			request.get({ url: 'http://rq.local.com/books/getall'}, function(error, response, body) {
				// return JSON.parse(body);
				// myValue = JSON.parse(body);
				return JSON.parse(body);
			}).end();
		};

		console.log(this.myRequest);

		// var DataSet = myValue.on('update', function() {
		// 	return myValue.data;
		// 	// console.log(myValue.data);
		// });

		// var myReturnValues = {'title': 'Login', 'message': 'This is the login page!', 'books': books};
		// res.render('login', myReturnValues);
		// return;
	});
*/
	return app;
};