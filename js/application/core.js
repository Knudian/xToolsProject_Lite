/* ===== Application declaration ===== */
var app = angular.module("xToolsLite", ['ui.bootstrap', 'ngRoute', 'pascalprecht.translate', 'ngCookies', 'ngSanitize', 'angularDurationFormat']);
/* ===== Translate provider ===== */
app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider
        .translations('en', translations.EN)
        .translations('fr', translations.FR)
        .translations('de', translations.DE)
        .preferredLanguage('en')
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');
}]);
/* ===== Route parameters ===== */
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home', {templateUrl: 'partials/home.html', controller:"Home_Controller"})
        .when('/error', {templateUrl: 'partials/error.html'})
        .when('/hammerbuilder', {templateUrl: 'partials/hammerbuilder.html', controller:'HB_Controller'})
        .when('/tsa', {templateUrl: 'partials/tsa.html', controller:'TSA_Controller'})
        .when('/troopresearch', {templateUrl: 'partials/troop_research.html', controller: 'TComparator_Controller'})
        .when('/personnalplan', {templateUrl: 'partials/personnal_plan.html', controoler: 'Personnal_Plan_Controller'})
        .otherwise({redirectTo: '/error'});
}]);
/* ===== Home Controller ===== */
app.controller('Home_Controller', ['$scope', function ($scope) { $scope.flags = translationsFlags; }]);
/* ===== Personnal plan Controller ===== */
app.controller('Personnal_Plan_Controller', ['$scope', '$log', function ($scope, $log) {
    /*
        @Player Params :
        - player tribe to get the precise speed of troops.
        - server speed
        - slowest troop used,
        - offensive village coordinates,
        - level of tournament square.
        
        @Target(s) Params :
        - coordinates of the targetted village,
        - type of movement,
        - hour of impact.
        
        @Functions :
        - adding a target to the global list.
        - blocking the third panel if the target list == 0
        
    */
    $scope.StartCTRL = function() {
        $scope.player = {'tribe':'ROMAN','x':'100','y':'100','type':'normal'};
        $scope.status.first.open = true;
        $scope.target = {'type':'REINFORCEMENT','landing':'29:05:2015:03:15:53','x':0, 'y':0};
        $log.info('Controller Loaded.');
        alert("BIIIIIIIIIIIIIIIIIIP");
    }
}]);