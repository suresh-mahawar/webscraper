'use strict';

/* defining the app */
var app = angular
	.module("demo", ['ngRoute','ngResource', 'angular-growl'])
	.config(function($routeProvider, growlProvider) {
		growlProvider.globalTimeToLive(5000);
	    $routeProvider
				.when('/',
					 {templateUrl: 'app/index.html'},
					 {controller: 'userCtrl.js'}
					)
				.otherwise({redirectTo: '/'})

				.when('/Scraper',
					 {templateUrl: 'app/scraper.html'},
					 {controller: 'scraperCtrl.js'}
					)
				.otherwise({redirectTo: '/'});


	});