angular.module("pulguitaz", ["ui.router", "main"]);

angular.module("pulguitaz").config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state({
            name: "subscribe",
            url: "/subscribe",
            controller: "SubscribeCtrl",
            templateUrl: "views/main/subscribe.html"
        })
        .state({
            name: "confirm",
            url: "/confirm",
            controller: "ConfirmCtrl",
            templateUrl: "views/main/confirm.html"
        });

    $urlRouterProvider.otherwise('/subscribe');
}]);