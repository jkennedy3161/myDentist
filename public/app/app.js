// starts the module and links the external dependencies
angular.module('dentistApp', [])

.controller('appController', function($scope) {
	console.log('$scope is ' + $scope)
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
		'name' : 'Dr. Filstein',
		'exp' : '12 years',
		'available' : true
	},
	{
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
		'name' : 'Dr. Filstein',
		'exp' : '12 years',
		'available' : true
	},
	{
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
		'name' : 'Dr. Filstein',
		'exp' : '12 years',
		'available' : true
	},
	{
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
		'name' : 'Dr. Filstein',
		'exp' : '12 years',
		'available' : true
	}
	]
});