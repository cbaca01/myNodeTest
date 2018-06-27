var express = require('express');
var request = require('request');
var app = express.Router();

globals = function() {

	self = this;

	// execute service
	this.execService = function(request, url, callback) {
		request.get({ url: url}, function(error, response, body) {
			callback(JSON.parse(body));
		}).end();
	};





};