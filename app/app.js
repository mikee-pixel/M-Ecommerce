const mainModule = angular.module('mainModule', ['ngSanitize', 'ngRoute', 'ngAnimate']);



mainModule.controller('headerMenuController', ['$scope', function($scope){
    $scope.burgerBtn = document.querySelector('#bar');
    $scope.closeBtn = document.querySelector('#close-btn');
    $scope.menuItemContainer = document.querySelector('.menu-item-container')

    if($scope.burgerBtn){
        $scope.burgerBtn.addEventListener('click', () => {
            $scope.menuItemContainer.classList.add('active');
        })
    }

    if($scope.closeBtn){
        $scope.closeBtn.addEventListener('click', () => {
            $scope.menuItemContainer.classList.remove('active');
        })
    }
    
}]);

mainModule.controller('featuresModuleController', ['$scope', '$http', function($scope, $http){
    $http({
        method: 'GET',
        url: 'data/featureItem.json'
    }).then(function successCallBack(response){
        $scope.featureItems = response.data
    }, function errorCallBack(response){
        console.log(response);
    })
}]);

mainModule.controller('featuredProductsController', ['$scope', '$http', function($scope, $http){
    $http({
        method: 'GET',
        url: 'data/productItems.json'
    }).then(function successCallBack(response){
        $scope.productItems = response.data
    }, function errorCallBack(response){
        console.log(response);
    })
}]);

mainModule.controller('newArrivalController', ['$scope', '$http', function($scope, $http){
    $http({
        method: 'GET',
        url: 'data/newArrivalItems.json'
    }).then(function successCallBack(response){
        $scope.newArrivalItems = response.data
    }, function errorCallBack(response){
        console.log(response);
    })
}]);