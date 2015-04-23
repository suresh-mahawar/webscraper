var formApp = angular.module('formApp', [])

    .controller('formController', function($scope) {
  
        // we will store our form data in this object
        $scope.formData = {};
        
    });

app.controller('userCtrl', [ '$scope', '$http','$location', 'growl',
	function($scope, $http, $location,  growl){		
		$scope.submit = function(){	
			$scope.submitted=true;
        	if(signupForm.$valid && $scope.followTerm && ($scope.formData.password ==$scope.confirmHashedPassword)){	
			// if ($scope.signupForm.$valid) {			
				$http.post('/user',$scope.formData).then(function(data){
					console.log('success');					
					growl.addSuccessMessage("successfull registration");
					
				}).catch(function(error){
					console.log(error);
					if(error.data.message)
					growl.addErrorMessage(error.data.message);
				})
			}
			else
			{
				growl.addErrorMessage('please provide valid details!');	
			}
		}

	}]
)