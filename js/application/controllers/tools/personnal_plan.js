/* ===== Personnal plan Controller ===== */
app.controller('Personnal_Plan_Controller', ['$scope', '$log', function ($scope, $log) {
    $scope.player = {'tribe':'ROMAN','x':'100','y':'100',"type":"normal"};
    $scope.status.first.open = true;
    $scope.Init = function() {
        $scope.player = {'tribe':'ROMAN','x':'100','y':'100',"type":"normal"};
        $log.info('Datas initialized');
        alert("Trololo !");
    };
    $scope.CalculateTraining = function (){
        $log.info('Calcultation started.');
        alert("Trololo !");
    };
}]);