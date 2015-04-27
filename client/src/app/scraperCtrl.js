var formApp = angular.module('formApp', [])

    .controller('urlValidationController', function($scope) {
  
        // we will store our form data in this object
        $scope.formData = {};
        
    });

app.controller('scraperCtrl', [ '$scope', '$http','$location', 'growl','$sce',

	function($scope, $http, $location,  growl, $sce){		
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
			$scope.thisCanBeusedInsideNgBindHtml=$sce.trustAsResourceUrl(data.url);	
			
			
        	
			// var doc = document.getElementById('FileFrame').contentWindow.document;
			// $scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml(data.html);	
			// var doc=$("iframe").contentWindow.document;
			// doc.open();
			// doc.writeln($sce.trustAsHtml(data.html));
			// doc.close();
			
        }
        var isEmpty = function (obj) {
		    for (var i in obj) if (obj.hasOwnProperty(i)) return false;
		    return true;
		};
        

	}]
)