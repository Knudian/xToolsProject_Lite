/* ===== Route parameters ===== */
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home', {templateUrl: 'partials/home.html', controller:"Home_Controller"})
        .when('/error', {templateUrl: 'partials/error.html'})
        .when('/hammerbuilder', {templateUrl: 'partials/hammerbuilder.html', controller:'HB_Controller'})
        .when('/tsa', {templateUrl: 'partials/tsa.html', controller:'TSA_Controller'})
        .when('/troopresearch', {templateUrl: 'partials/troop_research.html', controller:'TComparator_Controller'})
        .otherwise({redirectTo: '/error'});
}]);
