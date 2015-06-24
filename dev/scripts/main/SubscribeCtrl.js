/**
 * Created by scastillo on 6/24/15.
 */

angular.module("main").controller("SubscribeCtrl", ["$scope", "$location", function ($scope, $location) {
    $scope.subscribe = function () {
        $location.url("confirm");
    }
}]);