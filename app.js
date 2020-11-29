'use strict';

var app = angular.module('ATM', ['ngRoute']);
app.config( function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/'});
});

app.controller('cardController', function($scope) {

$scope.displayCardNumber = "XXXX XXXX XXXX";
	$('#cardNumber').on('keypress', function () {
		$(this).val(function (index, value) {
			$scope.displayCardNumber = value;
			return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
		});
	});

$scope.displayName = "XXXXXX XXXXX";
	$('#cardHolderName').on('keypress', function () {
		$(this).val(function (index, value) {
			$scope.displayName = value;
			return value.replace(/\W/gi, '').replace(/(.' '/g, '$1 ');
		});
	});



});

