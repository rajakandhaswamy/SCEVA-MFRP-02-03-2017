var page3 = angular.module("page3app",[]);
page3.controller("page3controller", function($scope, $http,$location){
		 $scope.createaccount = function() {
		console.log($scope.firstName);
		if(!$scope.input){
			alert("Please Submit your details completely");
		}
		else if(!$scope.input.username){
			alert("Please Enter valid Name [A-Z]");
		}
		else if(!$scope.input.password){
			alert("Please Enter valid Name [A-Z]");
		}else if(!$scope.input.re-enterpassword){
			alert("Please Enter valid Address1");
		}
		else if(!$scope.input.createpin){
			alert("Please Enter valid Address2 ");
		}
		else if(!$scope.input.re-enterpin){
			alert("Please Enter valid city ");
		}
		else if(!$scope.select.question1){
			alert("Please Enter valid State ");
		}
		else if(!$scope.input.answer1){
			alert("Please Enter valid ZIP ");
		}
		else if(!$scope.select.question2){
			alert("Please Enter valid Number ");
		}
		else if(!$scope.input.answer2){
			alert("Please Enter valid Email ");
		}
		else if(!$scope.input.promocode){
			alert("Please Enter valid Email ");
		}


		else{
		console.log("input data hs been saved");
		$location.path('/page4')
		}
	};
	
});