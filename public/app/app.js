// starts the module and links the external dependencies
angular.module('dentistApp', [])

.controller('appController', function($scope, $http) {

	// hardcoded dentists
	$scope.dentists = [{
		'name' : 'Dr. Hill',
		'exp' : '9 years',
		'available' : true
	},
	{
		'name' : 'Dr. Gary',
		'exp' : '6 years',
		'available' : false
	},
	{
		'name' : 'Dr. Gulp',
		'exp' : '9 years',
		'available' : true
	},
	{
		'name' : 'Dr. Suzie',
		'exp' : '6 years',
		'available' : false
	}
	]
});