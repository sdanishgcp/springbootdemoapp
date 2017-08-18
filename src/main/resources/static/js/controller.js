var app = angular.module('app', []);
app.controller('postcontroller', function($scope, $http, $location) {
	$scope.submitForm = function(){
		var url = $location.absUrl() + "postcustomer";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		var data = {
            empname: $scope.empname,
            empno  : $scope.empno,
            designation : $scope.designation,
            department : $scope.department
        };
		
		
		$http.post(url, data, config).then(function (response) {
			$scope.postResultMessage = "Sucessful!";
		}, function (response) {
			$scope.postResultMessage = "Fail!";
		});
		
		$scope.empname = "";
		$scope.empno = "";
		$scope.designation = "";
		$scope.department = "";
	}
});

app.controller('getcontroller', function($scope, $http, $location) {
	$scope.showTable = false;
	$scope.getfunction = function(){
		var url = $location.absUrl() + "getallcustomer";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		
		$http.get(url, config).then(function (response) {
			$scope.response = response.data;
			$scope.showTable = true;
		}, function (response) {
			$scope.getResultMessage = "Fail!";
			$scope.showTable = false;
		});
	}
});

app.controller('styleController', function($scope){
	
	var styleObj = {
			
			'color' : 'white',
			'background-color' : 'green',
			'font-size' : '20px',
			'align' : 'center'
			
	}
	$scope.styleObj = styleObj;
});


