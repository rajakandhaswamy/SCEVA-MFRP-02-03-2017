
var page1 = angular.module('page1controller', ['ngRoute']);
page1.controller('page1controller', function($scope,$http,$location) {
$scope.Submit = function() {
		console.log($scope.user);
		if(!$scope.user){
			alert("Please Submit your details completely");
		}
		else if(!$scope.user.username){
			alert("Please Enter valid frist Name ");
		}
		else if(!$scope.user.email){
			alert("Please Enter valid email ID");
		}else if(!$scope.user.phoneno1){
			alert("Please Enter valid phone number1");
		}
		else if(!$scope.user.phoneno2){
			alert("Please Enter valid phone number2");
		}
		else if(!$scope.user.phoneno3){
			alert("Please Enter valid phone number3");
		}
		else if(!$scope.user.zipcode){
			alert("Please Enter valid zipcode");
		}
		else{
			console.log("user data is saved");
			$location.path('/page2');
		}
            };

      });