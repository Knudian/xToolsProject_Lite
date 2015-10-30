/* ===== HELPER : Troop Research ===== */
app.controller("TComparator_Controller", ['$scope', '$log', '$sce', function ($scope, $log, $sce) {
    $scope.tribe = 1;
    $scope.nr = 1;
    $scope.troopId = 1;
    $scope.tribeName = [null, 'roman', 'teuton', 'gaul'];
    $scope.tribeU = [null, 'ROMAN', 'TEUTON', 'GAUL'];
    $scope.TroopValue = Travian.troop[1];
    $scope.npcUse = false;
    $scope.UpdateTable = function (id) {
        // Set the troop Sub Id
        $scope.nr = id % 10;
        // Get the troop's tribe
        $scope.tribe = (id - $scope.nr )/10 + 1;
        // Set the troop name to display.
        $scope.TroopValue = Travian.troop[id];
        $scope.upgradeTable = [];
        var k = Travian.Config['unitResearchStrengthMultiplier'],
            m = Travian.Config['unitResearchSupplyMultiplier'];
        for (var i = 0; i<21;i++){
            // Create the line entry for the associated value.
            var u = $scope.TroopValue, val_a, val_b, val_c;
            i < 1 ? val_a = u.att  : val_a = $scope.upgradeTable[i-1].att *k + m * u.supply;
            i < 1 ? val_b = u.defI : val_b = $scope.upgradeTable[i-1].defI*k + m * u.supply;
            i < 1 ? val_c = u.defC : val_c = $scope.upgradeTable[i-1].defC*k + m * u.supply;
            $scope.upgradeTable[i] = {
                wood: u.upgrades[i][0],
                clay: u.upgrades[i][1],
                iron: u.upgrades[i][2],
                att:  val_a, 
                defI: val_b,
                defC: val_c,
                troops: [0, 0, 0],
                troopsMin: null
            };
            /* Calculate the amount of troops "trainable" with the research cost */
            var z = Math.min($scope.upgradeTable[i].wood/u.costs[0], $scope.upgradeTable[i].clay/u.costs[1], $scope.upgradeTable[i].iron/u.costs[2]),
                y = ($scope.upgradeTable[i].wood + $scope.upgradeTable[i].clay +$scope.upgradeTable[i].iron) / (u.costs[0] + u.costs[1] + u.costs[2]),
                qTroops = 0;
            if (i > 0 ) {
                $scope.npcUse == false ? qTroops = z : qTroops = y;
                qTroops = Math.floor(qTroops);
                $scope.upgradeTable[i].troops[0] = Math.ceil(qTroops * $scope.upgradeTable[i-1].att / ( $scope.upgradeTable[i].att - $scope.upgradeTable[i-1].att));
                $scope.upgradeTable[i].troops[1] = Math.ceil(qTroops * $scope.upgradeTable[i-1].defI / ( $scope.upgradeTable[i].defI - $scope.upgradeTable[i-1].defI));
                $scope.upgradeTable[i].troops[2] = Math.ceil(qTroops * $scope.upgradeTable[i-1].defC / ( $scope.upgradeTable[i].defC - $scope.upgradeTable[i-1].defC));
                $scope.upgradeTable[i].troopsMin = Math.min( $scope.upgradeTable[i].troops[0], $scope.upgradeTable[i].troops[1], $scope.upgradeTable[i].troops[2]);
            }
        }
        $scope.troopId = id;
    };
    $scope.Init = function (){ $scope.UpdateTable(1); };
} ] );