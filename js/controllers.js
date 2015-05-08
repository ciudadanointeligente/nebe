var arkakApp = angular.module('arkakApp', [], function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

arkakApp.controller("ReportsCtrl", function($scope, $http){
	$scope.reports = [];

	$http.get('/reports/reports.json')
		.success(function(data){
			$scope.reports = data.reports;
		})
})