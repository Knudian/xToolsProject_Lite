/* ===== Route parameters ===== */
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/error', {templateUrl: 'partials/error.html'})
        .when('/hammerbuilder', {templateUrl: 'partials/hammerbuilder.html', controller:'HB_Controller'})
        .when('/tsa', {templateUrl: 'partials/tsa.html', controller:'TSA_Controller'})
        .when('/comparator', {templateUrl: 'partials/troop_research.html', controller:'TComparator_Controller'})
        .otherwise({redirectTo: '/error'});
}]);
