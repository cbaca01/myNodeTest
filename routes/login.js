var express = require('express');
var request = require('request');
var app = express.Router();

var global = require('../includes/globals.js');

module.exports = function(app) {
	this.route = '/login';

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
		// self.globalsClass.execService(request, 'http://rq.local.com/books/getall', this.returnDataSet);
	});

	return app;
};