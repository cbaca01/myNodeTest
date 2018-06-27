var express = require('express');
var request = require('request');
var app = express.Router();

var global = require('../includes/globals.js');

module.exports = function(app) {
	this.route = '/dashboard';

	this.books = {};
	this.globalsClass = new globals();

	self = this;

	app.use(this.route, function(req, res, next) {

		// Make Call
		this.returnDataSet = function(dataSet) {
			var returnValues = {title: 'Dashboard', 'data': dataSet};
			
			res.render('dashboard', returnValues);
			return;
		};

		// Execute service
		self.globalsClass.execService(request, 'http://mrsd-dev.local.com/login', this.returnDataSet);
	});

	return app;
};