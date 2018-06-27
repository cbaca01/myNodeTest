var express = require('express');
var request = require('request');
var app = express.Router();

module.exports = function(app) {
	this.route = '/users';

	app.get(this.route + '/users/create/:userID', function(req, res, next) {
		res.render('create_edit_user', { title: 'Hey', message: 'Hello there!' });
	});

	return app;
};