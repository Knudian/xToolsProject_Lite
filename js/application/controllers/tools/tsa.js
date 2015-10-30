/* ===== TOOL : Tournament Square Estimator ===== */
app.controller('TSA_Controller', ['$scope', function ToolTSCTRL($scope){
    $scope.tsInit = function(){
        $scope.attacker = {'tribe':'ROMAN','x':'100','y':'100',"type":"normal"};
        $scope.defender = {'x':'0','y':'0'};
        $scope.HourOfImpact = '';
        $scope.HourOfFirstView='';
        $scope.LastHourWithoutAttack='';
        /* Get the speed values from the Travian Array */
        $scope.troops = [];
        for (var p = 0; p < 5; p++){
            $scope.troops.push([]);
            for (var t = 0; t <10; t++){
                $scope.troops[p].push(0);
            }
        }
        angular.forEach(Travian.Config.troopConfig, function (troop){
            $scope.troops[troop.tribe -1][troop.nr-1] = troop.speed;
        });
        $scope.timeMin = {"t":0,"h":8,"m":0,"s":0,"f":0};
        $scope.timeMax = {"t":0,"h":12,"m":0,"s":0,"f":0};
        $scope.distance = 141.42;
        $scope.bootsbonus = 0;var i = 0;$scope.ts = [];
        for(i = 0; i<21;i++){
            $scope.ts[i] = {
                "level": i,
                "speed":[0,0,0,0,0,0,0,0,0,0],
                "aff":[0,0,0,0,0,0,0,0,0,0]
            };
        }
        $scope.tsAnalyse();
    };
    $scope.tsAnalyse = function(){
        /* Travel distance */
        $scope.distance = Math.round(Math.sqrt(Math.pow(($scope.defender.x - $scope.attacker.x), 2)+Math.pow(($scope.defender.y - $scope.attacker.y), 2))*100)/100;
        /* Travel times */
        var hours = [];var h =[];var i = 0;var j = 0;
        h[0] = $scope.HourOfImpact.split(":");
        h[1] = $scope.HourOfFirstView.split(":");
        h[2] = $scope.LastHourWithoutAttack.split(":");
        for(i=0;i<3;i++){
            j = h[i][2] + "-" + h[i][1] + "-" + h[i][0] + "T" + h[i][3] + ":" + h[i][4] + ":" + h[i][5];
            hours[i] = new Date(j);
        }
        $scope.timeMin.t = Math.floor((hours[0] - hours[1])/1000);
        $scope.timeMax.t = Math.floor((hours[0] - hours[2])/1000);
        $scope.timeMin.f = $scope.timeMin.t / 3600;
        $scope.timeMax.f = $scope.timeMax.t / 3600;
        $scope.timeMin.h = Math.floor($scope.timeMin.f);
        $scope.timeMax.h = Math.floor($scope.timeMax.f);
        $scope.timeMin.m = Math.floor(($scope.timeMin.t - 3600*$scope.timeMin.h)/60);
        $scope.timeMax.m = Math.floor(($scope.timeMax.t - 3600*$scope.timeMax.h)/60);
        $scope.timeMin.s = $scope.timeMin.t - 3600*$scope.timeMin.h - 60*$scope.timeMin.m;
        $scope.timeMax.s = $scope.timeMax.t - 3600*$scope.timeMax.h - 60*$scope.timeMax.m;
        $scope.ts = [];
        /* table creation */
        var t = 0;
        switch($scope.attacker.tribe){
                case "ROMAN":t=0;break;
                case "TEUTON":t=1;break;
                case "GAUL":t=2;break;
                case "NATURE":t=3;break;
                case "NATARS":t=4;break;
        }
        var i = 0;var j = 0;var k = 1;
        if($scope.attacker.type == "siege"){k = 2;}
        for(i = 0; i<21;i++){
            var sUnits = $scope.troops[t];
            $scope.ts[i] = {
                "level": i,
                "speed":[0,0,0,0,0,0,0,0,0,0],
                "aff":["","","","","","","","","",""]
            };
            var j = 0;
            for (j=0;j<10;j++){
                var z = 0;
                z = Math.round(100*k*($scope.distance / sUnits[j]))/100;
                if($scope.distance>20){
                    z = Math.round(100*k*(20/(sUnits[j]) + ($scope.distance-20)/(sUnits[j]*(1+0.1*i+$scope.bootsbonus/100))))/100;
                }
                $scope.ts[i].speed[j] = z;
                if(z >= $scope.timeMin.f && z <= $scope.timeMax.f){
                    $scope.ts[i].aff[j] = "ts-valid";
                }else{
                    $scope.ts[i].aff[j] = "ts-invalid";
                }
            }
        }
    };
}]);