var reportslistApp = angular.module('reportslistApp', [], function($interpolateProvider) { 
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

reportslistApp.controller('ReportsListCtrl', function ($scope, $http) {
	$http.get('/json/reports.json').success(function(data) { 
		$scope.reports = data;
	});
});