/* ===== Route parameters ===== */
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/error', {templateUrl: 'partials/error.html'})
        .when('/hammerbuilder', {templateUrl: 'partials/tools/hammerbuilder.html', controller:'HB_Controller'})
        .when('/tsa', {templateUrl: 'partials/tools/tsa.html', controller:'TSA_Controller'})
        .when('/comparator', {templateUrl: 'partials/helpers/troop_research.html', controller:'TComparator_Controller'})
        .otherwise({redirectTo: '/error'});
}]);
