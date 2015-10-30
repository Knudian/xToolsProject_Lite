/* ===== Route parameters ===== */
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/error', {templateUrl: 'partials/error.html'})
        .when('/hammerbuilder', {templateUrl: 'partials/tools/_hammerbuilder.html', controller:'HB_Controller'})
        .when('/tsa', {templateUrl: 'partials/tools/_tsa.html', controller:'TSA_Controller'})
        .when('/comparator', {templateUrl: 'partials/tools/_t_comparator.html', controller:'TComparator_Controller'})
        .otherwise({redirectTo: '/error'});
}]);