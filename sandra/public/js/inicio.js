var prueba = angular.module('myApp', []);
var coco2 = "%22DUMMY%22";
var ditto = {'yahoo': 'YHOO', 'google': 'GOOG', 'microsoft': 'MCFT', 'amazon': 'AMZN', 'apple': 'AAPL', 'alibaba': 'BABA'};
var coco;
prueba.controller('miCtrl', function($scope, $http) {
	$scope.estudiantes = [
	{nombre: 'Ana', edad: 13, quiz: 72},
	{nombre: 'Sergio', edad: 15, quiz: 80},
	{nombre: 'Gina', edad: 12, quiz: 90}
	]
	$http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22BABA%22%2C%22AMZN%22%2C%22TSLA%22%2C%22TWTR%22%2C%22AXP%22%2C%22BAC%22%2C%22IBM%22%2C%22PG%22%2C%22CVX%22%2C%22KO%22%2C%22CSCO%22%2C%22DOW%22%2C%22XOM%22%2C%22FB%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=").
		then(function(response) {
			$scope.cosas = response.data.query.results.quote;
			console.log($scope.cosas[0]);
			coco = $scope.cosas;
			// this callback will be called asynchronously
			// when the response is available
		}, function(response) {
			console.log("Sorry, no connection established...");
			// called asynchronously if an error occurs
			// or server returns response with an error status.
	});
});