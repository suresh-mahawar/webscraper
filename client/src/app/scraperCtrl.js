var formApp = angular.module('formApp', [])

    .controller('urlValidationController', function($scope) {
  
        // we will store our form data in this object
        $scope.formData = {};
        
    });

app.controller('scraperCtrl', [ '$scope', '$http','$location', 'growl',

	function($scope, $http, $location,  growl){		
		var _scope = {};
		$scope.submit = function(){	
			$scope.submitted=true;
        	if($scope.urlValidateForm.$valid){	
				$http.post('/GetData',$scope.formData).then(function(data){
					_scope.productList=data.data;
					initTable();			
				}).catch(function(error){
					console.log(error);
					if(error.data.message)
					growl.addErrorMessage(error.data.message);
				})
			}
			else
			{
				growl.addErrorMessage('please provide valid url!');	
			}
		}
		var initTable = function() {
			var data=_scope.productList;
			$scope.products=data;			
			console.log($scope.products);		
        }

	}]
)