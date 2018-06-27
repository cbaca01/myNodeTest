var express = require('express');
var request = require('request');
var hbs = require('handlebars');
var app = express.Router();
var path = require('path');

module.exports = function(app) {
	this.route = '/administration';

	app.get(this.route + '/', function(req, res, next) {
		res.render(path.join('administration/main'), { title: 'Hey', message: 'Hello there administration!' });
	});

	return app;
};