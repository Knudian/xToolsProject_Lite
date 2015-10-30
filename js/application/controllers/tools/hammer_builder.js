/* ===== TOOL : Hammer Builder Controller ===== */
app.controller('HB_Controller', ['$scope', '$http', '$log', '$routeParams', function HB_Controller($scope,$http,$log,$routeParams){
    $scope.Init = function(){
        $scope.tribe = 'ROMAN';
        $scope.duration = {type:'hour', value:1};
        $scope.barracks = 1;$scope.gbarracks = 1;
        $scope.stable = 1;$scope.gstable = 0;$scope.hdt=0;
        $scope.workshop = 1;$scope.artillery = 50;
        $scope.serverSpeed = 1;
        $scope.troops = [0,0,0,0,0,0,0,0,0,0];
        $scope.levels = [20,20,20,20,20,20,20,20,0,0];
        $scope.ressources = {wood:0, clay:0, iron:0, total:0};
        $scope.consumption = 0;
        $scope.strengths = {attC:0, attI:0, attAll:0, defC:0, defI:0};
        $scope.Tunits = [
            {
                tribe : "ROMAN",
                unit : [
                    [100,60,120,40,35,50,50,6,1,1600],
                    [80,100,140,30,65,35,20,5,1,1760],
                    [120,130,170,70,40,25,50,7,1,1920],
                    [100,140,10,0,20,10,0,16,2,1360],
                    [440,330,220,120,65,50,100,14,3,2640],
                    [370,450,700,180,80,105,70,10,4,3520],
                    [700,180,400,60,30,75,0,4,3,4600],
                    [690,1000,400,75,60,10,0,3,6,9000],
                    [30750,27200,45000,50,40,30,0,4,5,90700],
                    [3500,3000,4500,0,80,80,3000,5,1,26900]
                ]
            },
            {
                tribe : "TEUTON",
                unit : [
                    [85,65,30,40,20,5,60,7,1,720],
                    [125,50,65,10,35,60,40,7,1,1120],
                    [100,80,160,60,30,30,50,6,1,1200],
                    [140,80,30,0,10,5,0,9,1,1120],
                    [330,170,200,55,100,40,110,10,2,2400],
                    [350,400,320,150,50,75,80,9,3,2960],
                    [800,150,250,65,30,80,0,4,3,4200],
                    [660,900,370,50,60,10,0,3,4,9000],
                    [35500,26600,25000,40,60,40,0,4,4,70500],
                    [4000,3500,3200,10,80,80,3000,5,1,31000]
                ]
            },
            {
                tribe : "GAUL",
                unit :[
                    [80,100,40,15,40,50,35,7,1,1040],
                    [120,75,175,65,35,20,45,6,1,1440],
                    [140,110,20,0,20,10,0,17,2,1360],
                    [250,350,160,90,25,40,75,19,2,2480],
                    [300,270,190,45,115,55,35,16,2,2560],
                    [380,440,560,140,60,165,65,13,3,3120],
                    [750,370,220,50,30,105,0,4,3,5000],
                    [590,1200,400,70,45,10,0,3,6,9000],
                    [30750,45400,31000,40,50,50,0,5,4,90700],
                    [3000,4000,3000,0,80,80,3000,5,1,22700]
                ]
            }
        ];
        $scope.ratios = {i:100, c:50, a:50, h:0};
        // Weapons
        $scope.weaponsList = [
            {tribe:"ROMAN",unit:0, type:"def", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Short sword of the Legionnaire"},
            {tribe:"ROMAN",unit:0, type:"def", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Sword of the Legionnaire"},
            {tribe:"ROMAN",unit:0, type:"def", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Long sword of the Legionnaire"},
            {tribe:"ROMAN",unit:1, type:"def", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Short sword of the Praetorian"},
            {tribe:"ROMAN",unit:1, type:"def", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Sword of the Praetorian"},
            {tribe:"ROMAN",unit:1, type:"def", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Long sword of the Praetorian"},
            {tribe:"ROMAN",unit:2, type:"off", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Short sword of the Imperian"},
            {tribe:"ROMAN",unit:2, type:"off", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Sword of the Imperian"},
            {tribe:"ROMAN",unit:2, type:"off", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Long sword of the Imperian"},
            {tribe:"ROMAN",unit:4, type:"off", tier:1, troopBonus:9, heroBonus:[400,450,500,550,600], name:"Short sword of the Imperatoris"},
            {tribe:"ROMAN",unit:4, type:"off", tier:2, troopBonus:12, heroBonus:[800,900,1000,1100,1200], name:"Sword of the Imperatoris"},
            {tribe:"ROMAN",unit:4, type:"off", tier:3, troopBonus:15, heroBonus:[1500,1600,1700,1800,2000], name:"Long sword of the Imperatoris"},
            {tribe:"ROMAN",unit:5, type:"off", tier:1, troopBonus:12, heroBonus:[400,450,500,550,600], name:"Light lance of the Caesaris"},
            {tribe:"ROMAN",unit:5, type:"off", tier:2, troopBonus:16, heroBonus:[800,900,1000,1100,1200], name:"Lance of the Caesaris"},
            {tribe:"ROMAN",unit:5, type:"off", tier:3, troopBonus:20, heroBonus:[1500,1600,1700,1800,2000], name:"Heavy lance of the Caesaris"},
            {tribe:"TEUTON",unit:0, type:"off", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Club of the Clubswinger"},
            {tribe:"TEUTON",unit:0, type:"off", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Mace of the Clubswinger"},
            {tribe:"TEUTON",unit:0, type:"off", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Morning star of the Clubswinger"},
            {tribe:"TEUTON",unit:1, type:"def", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Spear of the Spearfighter"},
            {tribe:"TEUTON",unit:1, type:"def", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Spike of the Spearfighter"},
            {tribe:"TEUTON",unit:1, type:"def", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Lance of the Spearfighter"},
            {tribe:"TEUTON",unit:2, type:"off", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Hatchet of the Axeman"},
            {tribe:"TEUTON",unit:2, type:"off", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Axe of the Axeman"},
            {tribe:"TEUTON",unit:2, type:"off", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Battle axe of the Axeman"},
            {tribe:"TEUTON",unit:4, type:"def", tier:1, troopBonus:6, heroBonus:[400,450,500,550,600], name:"Light hammer of the Paladin"},
            {tribe:"TEUTON",unit:4, type:"def", tier:2, troopBonus:8, heroBonus:[800,900,1000,1100,1200], name:"Hammer of the Paladin"},
            {tribe:"TEUTON",unit:4, type:"def", tier:3, troopBonus:10, heroBonus:[1500,1600,1700,1800,2000], name:"Heavy hammer of the Paladin"},
            {tribe:"TEUTON",unit:5, type:"off", tier:1, troopBonus:9, heroBonus:[400,450,500,550,600], name:"Short sword of the Teutonic Knight"},
            {tribe:"TEUTON",unit:5, type:"off", tier:2, troopBonus:12, heroBonus:[800,900,1000,1100,1200], name:"Sword of the Teutonic Knight"},
            {tribe:"TEUTON",unit:5, type:"off", tier:3, troopBonus:15, heroBonus:[1500,1600,1700,1800,2000], name:"Long sword of the Teutonic Knight"},
            {tribe:"GAUL",unit:0, type:"def", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Spear of the Phalanx"},
            {tribe:"GAUL",unit:0, type:"def", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Pike of the Phalanx"},
            {tribe:"GAUL",unit:0, type:"def", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Lance of the Phalanx"},
            {tribe:"GAUL",unit:1, type:"off", tier:1, troopBonus:3, heroBonus:[400,450,500,550,600], name:"Short sword of the Swordsman"},
            {tribe:"GAUL",unit:1, type:"off", tier:2, troopBonus:4, heroBonus:[800,900,1000,1100,1200], name:"Sword of the Swordsman"},
            {tribe:"GAUL",unit:1, type:"off", tier:3, troopBonus:5, heroBonus:[1500,1600,1700,1800,2000], name:"Long sword of the Swordsman"},
            {tribe:"GAUL",unit:3, type:"off", tier:1, troopBonus:6, heroBonus:[400,450,500,550,600], name:"Short-bow of the Theutates"},
            {tribe:"GAUL",unit:3, type:"off", tier:2, troopBonus:8, heroBonus:[800,900,1000,1100,1200], name:"Bow of the Theutates"},
            {tribe:"GAUL",unit:3, type:"off", tier:3, troopBonus:10, heroBonus:[1500,1600,1700,1800,2000], name:"Long-Bow of the Theutates"},
            {tribe:"GAUL",unit:4, type:"def", tier:1, troopBonus:6, heroBonus:[400,450,500,550,600], name:"Walking-staff of the Druidrider"},
            {tribe:"GAUL",unit:4, type:"def", tier:2, troopBonus:8, heroBonus:[800,900,1000,1100,1200], name:"Staff of the Druidrider"},
            {tribe:"GAUL",unit:4, type:"def", tier:3, troopBonus:10, heroBonus:[1500,1600,1700,1800,2000], name:"Fighting-staff of the Druidrider"},
            {tribe:"GAUL",unit:5, type:"off", tier:1, troopBonus:9, heroBonus:[400,450,500,550,600], name:"Light lance of the Haeduan"},
            {tribe:"GAUL",unit:5, type:"off", tier:2, troopBonus:12, heroBonus:[800,900,1000,1100,1200], name:"Lance of the Haeduan"},
            {tribe:"GAUL",unit:5, type:"off", tier:3, troopBonus:15, heroBonus:[1500,1600,1700,1800,2000], name:"Heavy lance of the Haeduan"}
        ];
        $scope.weapon = {type:"off", tribe:"ROMAN", tier:1};
        $scope.hero = {weapon:null, helmet : {use:false, percentage: 20, type:'barracks'}};
    };
    $scope.CalculateTraining = function(){
        /* Validate selectors max/min */
        if($scope.barracks < 0){$scope.barracks = 0;}
        if($scope.gbarracks < 0){$scope.gbarracks = 0;}
        if($scope.stable < 0){$scope.stable = 0;}
        if($scope.gstable < 0){$scope.gstable = 0;}
        if($scope.workshop < 0){$scope.workshop = 0;}
        if($scope.hdt < 0){$scope.hdt = 0;}
        if($scope.barracks > 20){$scope.barracks = 20;}
        if($scope.gbarracks > 20){$scope.gbarracks = 20;}
        if($scope.stable > 20){$scope.stable = 20;}
        if($scope.gstable > 20){$scope.gstable = 20;}
        if($scope.workshop > 20){$scope.workshop = 20;}
        if($scope.hdt > 20){$scope.hdt = 20;}
        /* Reset older calculated values */
        $scope.ressources = {wood:0, clay:0, iron:0, total:0};
        $scope.consumption = 0;
        $scope.strengths = {attC:0, attI:0, attAll:0, defC:0, defI:0};
        $scope.weapon.tribe = $scope.tribe;
        var buildingBonus = [0,1,0.9,0.81,0.73,0.66,0.59,0.53,0.48,0.43,0.39,0.35,0.31,0.28,0.25,0.23,0.21,0.19,0.17,0.15,0.14];
        /* Training duration */
        var calculDuration = 0, i = 0;
        switch ($scope.duration.type ){
                case "hour"     : i = 3600; break;
                case "day"      : i = 86400; break;
                case "week"     : i = 604800; break;
                case "month"    : i = 2678400; break;
                case "year"     : i = 31536000; break;
                default:i = 3600;
        }
        $scope.calculDuration = $scope.duration.value * i;
        // Get the troops value
        var troopsValues = {};
        switch($scope.tribe){
                case 'ROMAN'    : troopsValues = $scope.Tunits[0].unit; break;
                case 'TEUTON'   : troopsValues = $scope.Tunits[1].unit; break;
                default:troopsValues = $scope.Tunits[2].unit;
        }
        var UsedTroops = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], 0, 0, 0, 0];
        /*
            the training formula is : Math.floor( duration / ((TroopLvl0 Time / serverSpeed)*buildingBonus[buildingLevel] );
        */
        // Infantry
        if($scope.tribe !== 'TEUTON'){$scope.ratios.i = 100;}
        var Ratio = $scope.ratios.i/100;
        ($scope.barracks > 0 && $scope.tribe === 'ROMAN') ? UsedTroops[2][0] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[2][9]*buildingBonus[$scope.barracks]) )  : 0;
        ($scope.barracks > 0 && $scope.tribe === 'GAUL') ? UsedTroops[1][0] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[1][9]*buildingBonus[$scope.barracks]) )  : 0;
        ($scope.barracks > 0 && $scope.tribe === 'TEUTON') ? UsedTroops[0][0] = Math.floor(($scope.calculDuration*(1-Ratio)) / ( troopsValues[0][9]*buildingBonus[$scope.barracks]) )  : 0;
        ($scope.barracks > 0 && $scope.tribe === 'TEUTON') ? UsedTroops[2][0] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[2][9]*buildingBonus[$scope.barracks]) )  : 0;
        ($scope.gbarracks > 0 && $scope.tribe === 'ROMAN') ? UsedTroops[2][1] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[2][9]*buildingBonus[$scope.gbarracks]) ) : 0;
        ($scope.gbarracks > 0 && $scope.tribe === 'GAUL') ? UsedTroops[1][1] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[1][9]*buildingBonus[$scope.gbarracks]) ) : 0;
        ($scope.gbarracks > 0 && $scope.tribe === 'TEUTON') ? UsedTroops[0][1] = Math.floor(($scope.calculDuration*(1-Ratio)) / ( troopsValues[0][9]*buildingBonus[$scope.gbarracks]) ) : 0;
        ($scope.gbarracks > 0 && $scope.tribe === 'TEUTON') ? UsedTroops[2][1] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[2][9]*buildingBonus[$scope.gbarracks]) ) : 0;
        // Cavalry
        if($scope.tribe === 'TEUTON'){$scope.ratios.c = 100;}
        var Ratio = $scope.ratios.c/100;
        var ratioSup = 0;
        $scope.tribe !== 'ROMAN' ? ratioSup = 1 : ratioSup = 1-($scope.ratios.h*0.01);
        ($scope.stable > 0 && $scope.tribe === 'ROMAN') ? UsedTroops[4][0] = Math.floor(($scope.calculDuration*(1-Ratio)) / ( troopsValues[4][9]*buildingBonus[$scope.stable]*ratioSup ) ) : 0;
        ($scope.stable > 0 && $scope.tribe === 'ROMAN') ? UsedTroops[5][0] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[5][9]*buildingBonus[$scope.stable]*ratioSup ) ) : 0;
        ($scope.stable > 0 && $scope.tribe === 'GAUL') ? UsedTroops[3][0] = Math.floor(($scope.calculDuration*(1-Ratio)) / ( troopsValues[3][9]*buildingBonus[$scope.stable]*ratioSup ) ) : 0;
        ($scope.stable > 0 && $scope.tribe === 'GAUL') ? UsedTroops[5][0] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[5][9]*buildingBonus[$scope.stable]*ratioSup ) ) : 0;
        ($scope.stable > 0 && $scope.tribe === 'TEUTON') ? UsedTroops[5][0] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[5][9]*buildingBonus[$scope.stable]*ratioSup ) ) : 0;
        ($scope.gstable > 0 && $scope.tribe === 'ROMAN') ? UsedTroops[4][1] = Math.floor(($scope.calculDuration*(1-Ratio)) / ( troopsValues[4][9]*buildingBonus[$scope.gstable]*ratioSup ) ) : 0;
        ($scope.gstable > 0 && $scope.tribe === 'ROMAN') ? UsedTroops[5][1] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[5][9]*buildingBonus[$scope.gstable]*ratioSup ) ) : 0;
        ($scope.gstable > 0 && $scope.tribe === 'GAUL') ? UsedTroops[3][1] = Math.floor(($scope.calculDuration*(1-Ratio)) / ( troopsValues[3][9]*buildingBonus[$scope.gstable]*ratioSup ) ) : 0;
        ($scope.gstable > 0 && $scope.tribe === 'GAUL') ? UsedTroops[5][1] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[5][9]*buildingBonus[$scope.gstable]*ratioSup ) ) : 0;
        ($scope.gstable > 0 && $scope.tribe === 'TEUTON') ? UsedTroops[5][1] = Math.floor(($scope.calculDuration*Ratio) / ( troopsValues[5][9]*buildingBonus[$scope.gstable]*ratioSup ) ) : 0;
        // Artillery
        $scope.workshop !== 0 ? UsedTroops[6] = Math.floor( ($scope.calculDuration * (1 - $scope.artillery / 100) ) / ( (troopsValues[6][9] / $scope.serverSpeed)*buildingBonus[$scope.workshop])) : 0;
        $scope.workshop !== 0 ? UsedTroops[7] = Math.floor( ($scope.calculDuration * ($scope.artillery / 100) ) / ( (troopsValues[6][9] / $scope.serverSpeed)*buildingBonus[$scope.workshop])) : 0;
        // Applying Helmet's Bonus
        if($scope.hero.helmet.use === true)
        {
            var fields = [false, false, false, false, false, false, false, false, false, false];
            if($scope.hero.helmet.type === 'barracks')
            {
                if($scope.tribe !== 'GAUL'){fields[2] = true;}
                if($scope.tribe === 'GAUL'){fields[1] = true;}
                if($scope.tribe === 'TEUTON'){fields[0] = true;}
            }else{
                if($scope.tribe !== 'TEUTON'){fields[5] = true;}
                if($scope.tribe === 'GAUL'){fields[3] = true;}
                if($scope.tribe === 'ROMAN'){fields[4] = true;}
            }
            for (var i = 0; i<fields.length;i++)
            {
                if(fields[i] === true)
                {
                    UsedTroops[i][0] = Math.floor((1+$scope.hero.helmet.percentage/100)*UsedTroops[i][0]);
                    UsedTroops[i][1] = Math.floor((1+$scope.hero.helmet.percentage/100)*UsedTroops[i][1]);
                }
            }
        }
        // Calculate the needed ressources and combining the Troops
        for (var i = 0; i<10;i++)
        {
            if(i<6)
            {
                $scope.ressources.wood += (UsedTroops[i][0]+ 3*UsedTroops[i][1])*troopsValues[i][0];
                $scope.ressources.clay += (UsedTroops[i][0]+ 3*UsedTroops[i][1])*troopsValues[i][1];
                $scope.ressources.iron += (UsedTroops[i][0]+ 3*UsedTroops[i][1])*troopsValues[i][2];
                $scope.consumption += (UsedTroops[i][0]+UsedTroops[i][1])*troopsValues[i][8];
                $scope.troops[i] = UsedTroops[i][0]+UsedTroops[i][1];
            }else{
                $scope.ressources.wood += UsedTroops[i]*troopsValues[i][0];
                $scope.ressources.clay += UsedTroops[i]*troopsValues[i][1];
                $scope.ressources.iron += UsedTroops[i]*troopsValues[i][2];
                $scope.consumption += UsedTroops[i]*troopsValues[i][8];
                $scope.troops[i] = UsedTroops[i];
            }
        }
        $scope.ressources.total = $scope.ressources.wood + $scope.ressources.clay + $scope.ressources.iron;
        // Apply the consumption minus given by the Horse Drinking Tough for ROMANs
        if($scope.tribe === 'ROMAN')
        {
            var minusToApply = 0;
            if($scope.ratios.h > 9){ minusToApply += UsedTroops[3][0]+UsedTroops[3][1];}
            if($scope.ratios.h > 14) { minusToApply += UsedTroops[4][0]+UsedTroops[4][1];}
            if($scope.ratios.h > 19) { minusToApply += UsedTroops[5][0]+UsedTroops[5][1];}
            $scope.consumption -= minusToApply;
        }
        // Calculate the strengths
        var heroBonus = [0,0,0,0,0,0,0,0,0,0], powers = [];
        if($scope.hero.weapon !== null)
        {
            var k =  $scope.hero.weapon.split('_');
            heroBonus[k[0]] += parseInt(k[1],10);
        }
        /* The smithy formula :
        
            Strength (at level n) = Strength(at level 0)+(Strength(at level 0) + (300 * [crop consumption of the troop) / 7 )*(1.007^(n)))        
        
        */
        for(var i= 0; i<10; i++)
        {  
            powers[i] = $scope.troops[i]*Math.floor(heroBonus[i]+troopsValues[i][3]+(troopsValues[i][3]+(300*troopsValues[i][8])/7)*(Math.pow(1.007, $scope.levels[i])-1));
            $scope.strengths.defI += $scope.troops[i]*Math.floor(heroBonus[i]+troopsValues[i][4]+(troopsValues[i][4]+(300*troopsValues[i][8])/7)*(Math.pow(1.007, $scope.levels[i])-1));
            $scope.strengths.defC += $scope.troops[i]*Math.floor(heroBonus[i]+troopsValues[i][5]+(troopsValues[i][5]+(300*troopsValues[i][8])/7)*(Math.pow(1.007, $scope.levels[i])-1));
        }
        var k = ["i","i","_","_","c","c","i","i","i","i"];
        if($scope.tribe === 'ROMAN')    {k[2] ='i';k[3]='c';}
        if($scope.tribe === 'TEUTON')   {k[2] ='i';k[3]='i';}
        if($scope.tribe === 'GAUL')     {k[2] ='c';k[3]='c';}
        for(var i = 0; i<10; i++)
        {
            k[i] === 'i' ? $scope.strengths.attI += powers[i] : $scope.strengths.attC += powers[i];
            $scope.strengths.attAll += powers[i];
        }
    }
}]);