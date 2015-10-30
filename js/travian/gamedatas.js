var Travian = Travian || {};
//put all game design related config here
Travian.Config = {};
Travian.Config = {
    "goldConfig": {
        "plusAccount": 10,
        "plusAccountDuration": 604800,
        "plusAccountWholeRoundAvailable": false,
        "masterBuilder": 1,
        "instantConstruction": 3,
        "npcTrading": 4,
        "collectTributeInstant": 1,
        "maxTradeRecurrences": 2,
        "productionBonus": 15,
        "productionBonusDuration": 604800,
        "productionBonusWholeRoundAvailable": false,
        "cropProductionBonus": 10,
        "cropProductionBonusDuration": 604800,
        "cropProductionWholeRoundAvailable": false,
        "starterPackage": 60,
        "starterPackageDuration": 604800,
        "extraBuildingMasterSlot1": 50,
        "extraBuildingMasterSlot2": 75,
        "extraBuildingMasterSlot3": 100,
        "treasureResourcesInstant": 3,
        "traderArriveInstantly": 2,
        "traderSlot1": 50,
        "traderSlot2": 25
    },
    "merchantSpeed": {
        "0": 0,
        "1": 16,
        "2": 12,
        "3": 24,
        "5": 0
    },
    "oasisConfig": {
        "oasisBonus": 25,
        "embassyLevels": {
            "1": 1,
            "2": 10,
            "3": 20
        },
        "usableArea": 3
    },
    "townConfig": {
        "acceptanceMaxForTown": 200,
        "townAdditionalPopulation": 500,
        "townAdditionalCultureProduction": 200,
        "townAdditionalCultureProductionMain": 500,
        "townRequirementForPopulation": 500
    },
    "heroConfig": {
        "heroHealthRegenPerDay": 15,
        "MaxWaterbucketsPerDay": 1,
        "MaxOintmentsPerDay": 100,
        "MaxArtworksPerDay": 1,
        "HeroBaseStrengthRomans": 400,
        "HeroBaseStrengthOthers": 320
    },
    "TG_SPEED": 1,
    "TG_TROOP_SPEED": 1,
    "worldSize": 800,
    "farmListDefaultVillageLimit": 10,
    "farmListVillageLimit": 100,
    "farmListLimit": 100,
    "farmListNameMaxLength": 15,
    "worldStart": 1432209600,
    "troopConfig": {
        "1": {
            "id": 1,
            "nr": 1,
            "tribe": 1,
            "costs": {
                "1": 75,
                "2": 50,
                "3": 100,
                "4": 0
            },
            "time": 1600,
            "supply": 1,
            "speed": 6,
            "carry": 50,
            "attack": 40,
            "defence": 35,
            "defenceCavalry": 50,
            "requirements": [{
                "type": 2,
                "buildingType": 19,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 550,
                    "2": 300,
                    "3": 1000,
                    "4": 0
                },
                "time": 6600
            }
        },
        "2": {
            "id": 2,
            "nr": 2,
            "tribe": 1,
            "costs": {
                "1": 80,
                "2": 100,
                "3": 160,
                "4": 0
            },
            "time": 1760,
            "supply": 1,
            "speed": 5,
            "carry": 20,
            "attack": 30,
            "defence": 65,
            "defenceCavalry": 35,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 13,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 580,
                    "2": 500,
                    "3": 1480,
                    "4": 0
                },
                "time": 7080
            }
        },
        "3": {
            "id": 3,
            "nr": 3,
            "tribe": 1,
            "costs": {
                "1": 100,
                "2": 110,
                "3": 140,
                "4": 0
            },
            "time": 1920,
            "supply": 1,
            "speed": 7,
            "carry": 50,
            "attack": 70,
            "defence": 40,
            "defenceCavalry": 25,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 13,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 700,
                    "2": 540,
                    "3": 1320,
                    "4": 0
                },
                "time": 7560
            }
        },
        "4": {
            "id": 4,
            "nr": 4,
            "tribe": 1,
            "costs": {
                "1": 100,
                "2": 140,
                "3": 10,
                "4": 0
            },
            "time": 1360,
            "supply": 2,
            "speed": 16,
            "carry": 0,
            "attack": 0,
            "defence": 20,
            "defenceCavalry": 10,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 700,
                    "2": 660,
                    "3": 280,
                    "4": 0
                },
                "time": 5880
            }
        },
        "5": {
            "id": 5,
            "nr": 5,
            "tribe": 1,
            "costs": {
                "1": 350,
                "2": 260,
                "3": 180,
                "4": 0
            },
            "time": 2640,
            "supply": 3,
            "speed": 14,
            "carry": 100,
            "attack": 120,
            "defence": 65,
            "defenceCavalry": 50,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 2200,
                    "2": 1140,
                    "3": 1640,
                    "4": 0
                },
                "time": 9720
            }
        },
        "6": {
            "id": 6,
            "nr": 6,
            "tribe": 1,
            "costs": {
                "1": 280,
                "2": 340,
                "3": 600,
                "4": 0
            },
            "time": 3520,
            "supply": 4,
            "speed": 10,
            "carry": 70,
            "attack": 180,
            "defence": 80,
            "defenceCavalry": 105,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 1780,
                    "2": 1460,
                    "3": 5000,
                    "4": 0
                },
                "time": 12360
            }
        },
        "7": {
            "id": 7,
            "nr": 7,
            "tribe": 1,
            "costs": {
                "1": 700,
                "2": 180,
                "3": 400,
                "4": 0
            },
            "time": 4600,
            "supply": 3,
            "speed": 4,
            "carry": 0,
            "attack": 60,
            "defence": 30,
            "defenceCavalry": 75,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 21,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 4300,
                    "2": 820,
                    "3": 3400,
                    "4": 0
                },
                "time": 15600
            }
        },
        "8": {
            "id": 8,
            "nr": 8,
            "tribe": 1,
            "costs": {
                "1": 690,
                "2": 1000,
                "3": 400,
                "4": 0
            },
            "time": 9000,
            "supply": 6,
            "speed": 3,
            "carry": 0,
            "attack": 75,
            "defence": 60,
            "defenceCavalry": 10,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 15,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 21,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 4240,
                    "2": 4100,
                    "3": 3400,
                    "4": 0
                },
                "time": 28800
            }
        },
        "9": {
            "id": 9,
            "nr": 9,
            "tribe": 1,
            "costs": {
                "1": 30750,
                "2": 27200,
                "3": 45000,
                "4": 0
            },
            "time": 90700,
            "supply": 5,
            "speed": 4,
            "carry": 0,
            "attack": 50,
            "defence": 40,
            "defenceCavalry": 30,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 16,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 15880,
                    "2": 13800,
                    "3": 36400,
                    "4": 0
                },
                "time": 24475
            }
        },
        "10": {
            "id": 10,
            "nr": 10,
            "tribe": 1,
            "costs": {
                "1": 3500,
                "2": 3000,
                "3": 4500,
                "4": 0
            },
            "time": 26900,
            "supply": 1,
            "speed": 5,
            "carry": 3000,
            "attack": 0,
            "defence": 80,
            "defenceCavalry": 80,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 21100,
                    "2": 12100,
                    "3": 36200,
                    "4": 0
                },
                "time": 82500
            }
        },
        "11": {
            "id": 11,
            "nr": 1,
            "tribe": 2,
            "costs": {
                "1": 85,
                "2": 65,
                "3": 30,
                "4": 0
            },
            "time": 720,
            "supply": 1,
            "speed": 7,
            "carry": 60,
            "attack": 40,
            "defence": 20,
            "defenceCavalry": 5,
            "requirements": [{
                "type": 2,
                "buildingType": 19,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 610,
                    "2": 360,
                    "3": 440,
                    "4": 0
                },
                "time": 3960
            }
        },
        "12": {
            "id": 12,
            "nr": 2,
            "tribe": 2,
            "costs": {
                "1": 125,
                "2": 50,
                "3": 65,
                "4": 0
            },
            "time": 1120,
            "supply": 1,
            "speed": 7,
            "carry": 40,
            "attack": 10,
            "defence": 35,
            "defenceCavalry": 60,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 19,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 850,
                    "2": 300,
                    "3": 720,
                    "4": 0
                },
                "time": 5160
            }
        },
        "13": {
            "id": 13,
            "nr": 3,
            "tribe": 2,
            "costs": {
                "1": 80,
                "2": 65,
                "3": 130,
                "4": 0
            },
            "time": 1200,
            "supply": 1,
            "speed": 6,
            "carry": 50,
            "attack": 60,
            "defence": 30,
            "defenceCavalry": 30,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 13,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 580,
                    "2": 360,
                    "3": 1240,
                    "4": 0
                },
                "time": 5400
            }
        },
        "14": {
            "id": 14,
            "nr": 4,
            "tribe": 2,
            "costs": {
                "1": 140,
                "2": 80,
                "3": 30,
                "4": 0
            },
            "time": 1120,
            "supply": 1,
            "speed": 9,
            "carry": 0,
            "attack": 0,
            "defence": 10,
            "defenceCavalry": 5,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 940,
                    "2": 420,
                    "3": 440,
                    "4": 0
                },
                "time": 5160
            }
        },
        "15": {
            "id": 15,
            "nr": 5,
            "tribe": 2,
            "costs": {
                "1": 330,
                "2": 170,
                "3": 200,
                "4": 0
            },
            "time": 2400,
            "supply": 2,
            "speed": 10,
            "carry": 110,
            "attack": 55,
            "defence": 100,
            "defenceCavalry": 40,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 2080,
                    "2": 780,
                    "3": 1800,
                    "4": 0
                },
                "time": 9000
            }
        },
        "16": {
            "id": 16,
            "nr": 6,
            "tribe": 2,
            "costs": {
                "1": 280,
                "2": 320,
                "3": 260,
                "4": 0
            },
            "time": 2960,
            "supply": 3,
            "speed": 9,
            "carry": 80,
            "attack": 150,
            "defence": 50,
            "defenceCavalry": 75,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 15,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 1780,
                    "2": 1380,
                    "3": 2280,
                    "4": 0
                },
                "time": 10680
            }
        },
        "17": {
            "id": 17,
            "nr": 7,
            "tribe": 2,
            "costs": {
                "1": 800,
                "2": 150,
                "3": 250,
                "4": 0
            },
            "time": 4200,
            "supply": 3,
            "speed": 4,
            "carry": 0,
            "attack": 65,
            "defence": 30,
            "defenceCavalry": 80,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 21,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 4900,
                    "2": 700,
                    "3": 2200,
                    "4": 0
                },
                "time": 14400
            }
        },
        "18": {
            "id": 18,
            "nr": 8,
            "tribe": 2,
            "costs": {
                "1": 660,
                "2": 900,
                "3": 370,
                "4": 0
            },
            "time": 9000,
            "supply": 6,
            "speed": 3,
            "carry": 0,
            "attack": 50,
            "defence": 60,
            "defenceCavalry": 10,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 15,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 21,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 4060,
                    "2": 3700,
                    "3": 3160,
                    "4": 0
                },
                "time": 28800
            }
        },
        "19": {
            "id": 19,
            "nr": 9,
            "tribe": 2,
            "costs": {
                "1": 35500,
                "2": 26600,
                "3": 25000,
                "4": 0
            },
            "time": 70500,
            "supply": 4,
            "speed": 4,
            "carry": 0,
            "attack": 40,
            "defence": 60,
            "defenceCavalry": 40,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 16,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 18250,
                    "2": 13500,
                    "3": 20400,
                    "4": 0
                },
                "time": 19425
            }
        },
        "20": {
            "id": 20,
            "nr": 10,
            "tribe": 2,
            "costs": {
                "1": 4000,
                "2": 3500,
                "3": 3200,
                "4": 0
            },
            "time": 31000,
            "supply": 1,
            "speed": 5,
            "carry": 3000,
            "attack": 10,
            "defence": 80,
            "defenceCavalry": 80,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 24100,
                    "2": 14100,
                    "3": 25800,
                    "4": 0
                },
                "time": 94800
            }
        },
        "21": {
            "id": 21,
            "nr": 1,
            "tribe": 3,
            "costs": {
                "1": 85,
                "2": 100,
                "3": 50,
                "4": 0
            },
            "time": 1040,
            "supply": 1,
            "speed": 7,
            "carry": 35,
            "attack": 15,
            "defence": 40,
            "defenceCavalry": 50,
            "requirements": [{
                "type": 2,
                "buildingType": 19,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 610,
                    "2": 500,
                    "3": 600,
                    "4": 0
                },
                "time": 4920
            }
        },
        "22": {
            "id": 22,
            "nr": 2,
            "tribe": 3,
            "costs": {
                "1": 95,
                "2": 60,
                "3": 140,
                "4": 0
            },
            "time": 1440,
            "supply": 1,
            "speed": 6,
            "carry": 45,
            "attack": 65,
            "defence": 35,
            "defenceCavalry": 20,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 13,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 670,
                    "2": 340,
                    "3": 1320,
                    "4": 0
                },
                "time": 6120
            }
        },
        "23": {
            "id": 23,
            "nr": 3,
            "tribe": 3,
            "costs": {
                "1": 140,
                "2": 110,
                "3": 20,
                "4": 0
            },
            "time": 1360,
            "supply": 2,
            "speed": 17,
            "carry": 0,
            "attack": 0,
            "defence": 20,
            "defenceCavalry": 10,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 940,
                    "2": 540,
                    "3": 360,
                    "4": 0
                },
                "time": 5880
            }
        },
        "24": {
            "id": 24,
            "nr": 4,
            "tribe": 3,
            "costs": {
                "1": 200,
                "2": 280,
                "3": 130,
                "4": 0
            },
            "time": 2480,
            "supply": 2,
            "speed": 19,
            "carry": 75,
            "attack": 90,
            "defence": 25,
            "defenceCavalry": 40,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 1300,
                    "2": 1220,
                    "3": 1240,
                    "4": 0
                },
                "time": 9240
            }
        },
        "25": {
            "id": 25,
            "nr": 5,
            "tribe": 3,
            "costs": {
                "1": 300,
                "2": 270,
                "3": 190,
                "4": 0
            },
            "time": 2560,
            "supply": 2,
            "speed": 16,
            "carry": 35,
            "attack": 45,
            "defence": 115,
            "defenceCavalry": 55,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 1900,
                    "2": 1180,
                    "3": 1720,
                    "4": 0
                },
                "time": 9480
            }
        },
        "26": {
            "id": 26,
            "nr": 6,
            "tribe": 3,
            "costs": {
                "1": 300,
                "2": 380,
                "3": 440,
                "4": 0
            },
            "time": 3120,
            "supply": 3,
            "speed": 13,
            "carry": 65,
            "attack": 140,
            "defence": 60,
            "defenceCavalry": 165,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 15,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 1900,
                    "2": 1620,
                    "3": 3720,
                    "4": 0
                },
                "time": 11160
            }
        },
        "27": {
            "id": 27,
            "nr": 7,
            "tribe": 3,
            "costs": {
                "1": 750,
                "2": 370,
                "3": 220,
                "4": 0
            },
            "time": 5000,
            "supply": 3,
            "speed": 4,
            "carry": 0,
            "attack": 50,
            "defence": 30,
            "defenceCavalry": 105,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 21,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 4600,
                    "2": 1580,
                    "3": 1960,
                    "4": 0
                },
                "time": 16800
            }
        },
        "28": {
            "id": 28,
            "nr": 8,
            "tribe": 3,
            "costs": {
                "1": 590,
                "2": 1200,
                "3": 400,
                "4": 0
            },
            "time": 9000,
            "supply": 6,
            "speed": 3,
            "carry": 0,
            "attack": 70,
            "defence": 45,
            "defenceCavalry": 10,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 15,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 21,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 3640,
                    "2": 4900,
                    "3": 3400,
                    "4": 0
                },
                "time": 28800
            }
        },
        "29": {
            "id": 29,
            "nr": 9,
            "tribe": 3,
            "costs": {
                "1": 30750,
                "2": 45400,
                "3": 31000,
                "4": 0
            },
            "time": 90700,
            "supply": 4,
            "speed": 5,
            "carry": 0,
            "attack": 40,
            "defence": 50,
            "defenceCavalry": 50,
            "requirements": [{
                "type": 2,
                "buildingType": 22,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 16,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "research": {
                "costs": {
                    "1": 15880,
                    "2": 22900,
                    "3": 25200,
                    "4": 0
                },
                "time": 24475
            }
        },
        "30": {
            "id": 30,
            "nr": 10,
            "tribe": 3,
            "costs": {
                "1": 3000,
                "2": 4000,
                "3": 3000,
                "4": 0
            },
            "time": 22700,
            "supply": 1,
            "speed": 5,
            "carry": 3000,
            "attack": 0,
            "defence": 80,
            "defenceCavalry": 80,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 18100,
                    "2": 16100,
                    "3": 24200,
                    "4": 0
                },
                "time": 69900
            }
        },
        "31": {
            "id": 31,
            "nr": 1,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 300,
            "supply": 1,
            "speed": 20,
            "carry": 0,
            "attack": 10,
            "defence": 25,
            "defenceCavalry": 20,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 2700
            }
        },
        "32": {
            "id": 32,
            "nr": 2,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 360,
            "supply": 1,
            "speed": 20,
            "carry": 0,
            "attack": 20,
            "defence": 35,
            "defenceCavalry": 40,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 2880
            }
        },
        "33": {
            "id": 33,
            "nr": 3,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 420,
            "supply": 1,
            "speed": 20,
            "carry": 0,
            "attack": 60,
            "defence": 40,
            "defenceCavalry": 60,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 3060
            }
        },
        "34": {
            "id": 34,
            "nr": 4,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 480,
            "supply": 1,
            "speed": 20,
            "carry": 0,
            "attack": 80,
            "defence": 66,
            "defenceCavalry": 50,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 3240
            }
        },
        "35": {
            "id": 35,
            "nr": 5,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 540,
            "supply": 2,
            "speed": 20,
            "carry": 0,
            "attack": 50,
            "defence": 70,
            "defenceCavalry": 33,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 3420
            }
        },
        "36": {
            "id": 36,
            "nr": 6,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 600,
            "supply": 2,
            "speed": 20,
            "carry": 0,
            "attack": 100,
            "defence": 80,
            "defenceCavalry": 70,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 3600
            }
        },
        "37": {
            "id": 37,
            "nr": 7,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 660,
            "supply": 3,
            "speed": 20,
            "carry": 0,
            "attack": 250,
            "defence": 140,
            "defenceCavalry": 200,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 3780
            }
        },
        "38": {
            "id": 38,
            "nr": 8,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 720,
            "supply": 3,
            "speed": 20,
            "carry": 0,
            "attack": 450,
            "defence": 380,
            "defenceCavalry": 240,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 3960
            }
        },
        "39": {
            "id": 39,
            "nr": 9,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 780,
            "supply": 3,
            "speed": 20,
            "carry": 0,
            "attack": 200,
            "defence": 170,
            "defenceCavalry": 250,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 550,
                    "2": 250,
                    "3": 480,
                    "4": 0
                },
                "time": 1995
            }
        },
        "40": {
            "id": 40,
            "nr": 10,
            "tribe": 4,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
            },
            "time": 840,
            "supply": 5,
            "speed": 20,
            "carry": 0,
            "attack": 600,
            "defence": 440,
            "defenceCavalry": 520,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 4320
            }
        },
        "41": {
            "id": 41,
            "nr": 1,
            "tribe": 5,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 50
            },
            "time": 240,
            "supply": 1,
            "speed": 6,
            "carry": 10,
            "attack": 20,
            "defence": 35,
            "defenceCavalry": 50,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 2520
            }
        },
        "42": {
            "id": 42,
            "nr": 2,
            "tribe": 5,
            "costs": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 50
            },
            "time": 240,
            "supply": 1,
            "speed": 7,
            "carry": 10,
            "attack": 65,
            "defence": 30,
            "defenceCavalry": 10,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 700,
                    "2": 500,
                    "3": 1000,
                    "4": 0
                },
                "time": 2520
            }
        },
        "43": {
            "id": 43,
            "nr": 3,
            "tribe": 5,
            "costs": {
                "1": 150,
                "2": 150,
                "3": 150,
                "4": 150
            },
            "time": 360,
            "supply": 1,
            "speed": 6,
            "carry": 10,
            "attack": 100,
            "defence": 90,
            "defenceCavalry": 75,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 1000,
                    "2": 700,
                    "3": 1400,
                    "4": 0
                },
                "time": 2880
            }
        },
        "44": {
            "id": 44,
            "nr": 4,
            "tribe": 5,
            "costs": {
                "1": 50,
                "2": 50,
                "3": 50,
                "4": 75
            },
            "time": 120,
            "supply": 1,
            "speed": 25,
            "carry": 10,
            "attack": 0,
            "defence": 10,
            "defenceCavalry": 10,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 400,
                    "2": 300,
                    "3": 600,
                    "4": 0
                },
                "time": 2160
            }
        },
        "45": {
            "id": 45,
            "nr": 5,
            "tribe": 5,
            "costs": {
                "1": 300,
                "2": 150,
                "3": 150,
                "4": 100
            },
            "time": 480,
            "supply": 2,
            "speed": 14,
            "carry": 10,
            "attack": 155,
            "defence": 80,
            "defenceCavalry": 50,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 1900,
                    "2": 700,
                    "3": 1400,
                    "4": 0
                },
                "time": 3240
            }
        },
        "46": {
            "id": 46,
            "nr": 6,
            "tribe": 5,
            "costs": {
                "1": 250,
                "2": 250,
                "3": 400,
                "4": 150
            },
            "time": 600,
            "supply": 3,
            "speed": 12,
            "carry": 10,
            "attack": 170,
            "defence": 140,
            "defenceCavalry": 80,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 1600,
                    "2": 1100,
                    "3": 3400,
                    "4": 0
                },
                "time": 3600
            }
        },
        "47": {
            "id": 47,
            "nr": 7,
            "tribe": 5,
            "costs": {
                "1": 400,
                "2": 300,
                "3": 300,
                "4": 400
            },
            "time": 720,
            "supply": 4,
            "speed": 5,
            "carry": 10,
            "attack": 250,
            "defence": 120,
            "defenceCavalry": 150,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 2500,
                    "2": 1300,
                    "3": 2600,
                    "4": 0
                },
                "time": 3960
            }
        },
        "48": {
            "id": 48,
            "nr": 8,
            "tribe": 5,
            "costs": {
                "1": 200,
                "2": 200,
                "3": 200,
                "4": 100
            },
            "time": 600,
            "supply": 5,
            "speed": 3,
            "carry": 10,
            "attack": 60,
            "defence": 45,
            "defenceCavalry": 10,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 1300,
                    "2": 900,
                    "3": 1800,
                    "4": 0
                },
                "time": 3600
            }
        },
        "49": {
            "id": 49,
            "nr": 9,
            "tribe": 5,
            "costs": {
                "1": 1000,
                "2": 1000,
                "3": 1000,
                "4": 1000
            },
            "time": 1800,
            "supply": 1,
            "speed": 5,
            "carry": 10,
            "attack": 80,
            "defence": 50,
            "defenceCavalry": 50,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 1000,
                    "2": 700,
                    "3": 1200,
                    "4": 0
                },
                "time": 2250
            }
        },
        "50": {
            "id": 50,
            "nr": 10,
            "tribe": 5,
            "costs": {
                "1": 200,
                "2": 200,
                "3": 200,
                "4": 200
            },
            "time": 1800,
            "supply": 1,
            "speed": 5,
            "carry": 3000,
            "attack": 30,
            "defence": 40,
            "defenceCavalry": 40,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 1300,
                    "2": 900,
                    "3": 1800,
                    "4": 0
                },
                "time": 7200
            }
        },
        "99": {
            "id": 99,
            "nr": 79,
            "tribe": 3,
            "costs": {
                "1": 35,
                "2": 30,
                "3": 10,
                "4": 20
            },
            "time": 600,
            "supply": 0,
            "speed": 0,
            "carry": 0,
            "attack": 0,
            "defence": 0,
            "defenceCavalry": 0,
            "requirements": null,
            "research": {
                "costs": {
                    "1": 520,
                    "2": 220,
                    "3": 410,
                    "4": 0
                },
                "time": 1950
            }
        }
    },
    "recruitingBuildings": {
        "19": true,
        "29": true,
        "20": true,
        "30": true,
        "21": true,
        "25": true,
        "26": true,
        "36": true
    },
    "starvationCropMultiplier": 100,
    "unitResearchStrengthMultiplier": 1.007,
    "unitResearchSupplyMultiplier": 0.3,
    "buildingConfig": {
        "0": {
            "buildingType": 0,
            "costs": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0
            },
            "time": 30,
            "tribeId": 0,
            "category": 0,
            "requirements": null,
            "canFinishInstantly": true
        },
        "1": {
            "buildingType": 1,
            "costs": {
                "1": 40,
                "2": 100,
                "3": 50,
                "4": 60
            },
            "time": 25,
            "tribeId": 0,
            "category": 3,
            "requirements": null,
            "canFinishInstantly": true
        },
        "2": {
            "buildingType": 2,
            "costs": {
                "1": 80,
                "2": 40,
                "3": 80,
                "4": 50
            },
            "time": 20,
            "tribeId": 0,
            "category": 3,
            "requirements": null,
            "canFinishInstantly": true
        },
        "3": {
            "buildingType": 3,
            "costs": {
                "1": 100,
                "2": 80,
                "3": 30,
                "4": 60
            },
            "time": 30,
            "tribeId": 0,
            "category": 3,
            "requirements": null,
            "canFinishInstantly": true
        },
        "4": {
            "buildingType": 4,
            "costs": {
                "1": 75,
                "2": 90,
                "3": 85,
                "4": 0
            },
            "time": 20,
            "tribeId": 0,
            "category": 3,
            "requirements": null,
            "canFinishInstantly": true
        },
        "5": {
            "buildingType": 5,
            "costs": {
                "1": 520,
                "2": 380,
                "3": 290,
                "4": 90
            },
            "time": 480,
            "tribeId": 0,
            "category": 3,
            "requirements": [{
                "type": 2,
                "buildingType": 1,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "6": {
            "buildingType": 6,
            "costs": {
                "1": 440,
                "2": 480,
                "3": 320,
                "4": 50
            },
            "time": 480,
            "tribeId": 0,
            "category": 3,
            "requirements": [{
                "type": 2,
                "buildingType": 2,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "7": {
            "buildingType": 7,
            "costs": {
                "1": 200,
                "2": 450,
                "3": 510,
                "4": 120
            },
            "time": 480,
            "tribeId": 0,
            "category": 3,
            "requirements": [{
                "type": 2,
                "buildingType": 3,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "8": {
            "buildingType": 8,
            "costs": {
                "1": 500,
                "2": 440,
                "3": 380,
                "4": 1240
            },
            "time": 480,
            "tribeId": 0,
            "category": 3,
            "requirements": [{
                "type": 2,
                "buildingType": 4,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "9": {
            "buildingType": 9,
            "costs": {
                "1": 1200,
                "2": 1480,
                "3": 870,
                "4": 1600
            },
            "time": 780,
            "tribeId": 0,
            "category": 3,
            "requirements": [{
                "type": 2,
                "buildingType": 4,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 8,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "10": {
            "buildingType": 10,
            "costs": {
                "1": 140,
                "2": 180,
                "3": 100,
                "4": 0
            },
            "time": 35,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "11": {
            "buildingType": 11,
            "costs": {
                "1": 80,
                "2": 100,
                "3": 70,
                "4": 20
            },
            "time": 35,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "13": {
            "buildingType": 13,
            "costs": {
                "1": 180,
                "2": 250,
                "3": 500,
                "4": 160
            },
            "time": 40,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 22,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "14": {
            "buildingType": 14,
            "costs": {
                "1": 1750,
                "2": 2250,
                "3": 1530,
                "4": 240
            },
            "time": 380,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 2,
                "buildingType": 16,
                "minLvl": 15,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "15": {
            "buildingType": 15,
            "costs": {
                "1": 70,
                "2": 40,
                "3": 60,
                "4": 20
            },
            "time": 30,
            "tribeId": 0,
            "category": 1,
            "requirements": null,
            "canFinishInstantly": true
        },
        "16": {
            "buildingType": 16,
            "costs": {
                "1": 110,
                "2": 160,
                "3": 90,
                "4": 70
            },
            "time": 35,
            "tribeId": 0,
            "category": 2,
            "requirements": null,
            "canFinishInstantly": true
        },
        "17": {
            "buildingType": 17,
            "costs": {
                "1": 80,
                "2": 70,
                "3": 120,
                "4": 70
            },
            "time": 35,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }, [{
                "type": 2,
                "buildingType": 10,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 38,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }]],
            "canFinishInstantly": true
        },
        "18": {
            "buildingType": 18,
            "costs": {
                "1": 180,
                "2": 130,
                "3": 150,
                "4": 80
            },
            "time": 35,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "19": {
            "buildingType": 19,
            "costs": {
                "1": 210,
                "2": 140,
                "3": 260,
                "4": 120
            },
            "time": 35,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 16,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "20": {
            "buildingType": 20,
            "costs": {
                "1": 260,
                "2": 140,
                "3": 220,
                "4": 100
            },
            "time": 40,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 2,
                "buildingType": 13,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 22,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "21": {
            "buildingType": 21,
            "costs": {
                "1": 460,
                "2": 510,
                "3": 600,
                "4": 320
            },
            "time": 660,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 22,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "22": {
            "buildingType": 22,
            "costs": {
                "1": 220,
                "2": 160,
                "3": 90,
                "4": 40
            },
            "time": 35,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 19,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "23": {
            "buildingType": 23,
            "costs": {
                "1": 40,
                "2": 50,
                "3": 30,
                "4": 10
            },
            "time": 10,
            "tribeId": 0,
            "category": 1,
            "requirements": null,
            "canFinishInstantly": true
        },
        "24": {
            "buildingType": 24,
            "costs": {
                "1": 1250,
                "2": 1110,
                "3": 1260,
                "4": 600
            },
            "time": 660,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 22,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "25": {
            "buildingType": 25,
            "costs": {
                "1": 580,
                "2": 460,
                "3": 350,
                "4": 180
            },
            "time": 1350,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 26,
                "minLvl": -1,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": false
        },
        "26": {
            "buildingType": 26,
            "costs": {
                "1": 550,
                "2": 800,
                "3": 750,
                "4": 250
            },
            "time": 3660,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 25,
                "minLvl": -1,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 18,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }, {
                "type": 1,
                "villageType": 4,
                "op": 1,
                "valid": 0
            }],
            "canFinishInstantly": false
        },
        "27": {
            "buildingType": 27,
            "costs": {
                "1": 720,
                "2": 685,
                "3": 645,
                "4": 250
            },
            "time": 2040,
            "tribeId": 0,
            "category": 1,
            "requirements": null,
            "canFinishInstantly": false
        },
        "28": {
            "buildingType": 28,
            "costs": {
                "1": 1400,
                "2": 1330,
                "3": 1200,
                "4": 400
            },
            "time": 365,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 17,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "29": {
            "buildingType": 29,
            "costs": {
                "1": 630,
                "2": 420,
                "3": 780,
                "4": 360
            },
            "time": 660,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 1,
                "villageType": 2,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 19,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "30": {
            "buildingType": 30,
            "costs": {
                "1": 780,
                "2": 420,
                "3": 660,
                "4": 300
            },
            "time": 660,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 1,
                "villageType": 2,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "31": {
            "buildingType": 31,
            "costs": {
                "1": 70,
                "2": 90,
                "3": 170,
                "4": 70
            },
            "time": 35,
            "tribeId": 1,
            "category": 2,
            "requirements": null,
            "canFinishInstantly": true
        },
        "32": {
            "buildingType": 32,
            "costs": {
                "1": 120,
                "2": 200,
                "3": 0,
                "4": 80
            },
            "time": 35,
            "tribeId": 2,
            "category": 2,
            "requirements": null,
            "canFinishInstantly": true
        },
        "33": {
            "buildingType": 33,
            "costs": {
                "1": 160,
                "2": 100,
                "3": 80,
                "4": 60
            },
            "time": 35,
            "tribeId": 3,
            "category": 2,
            "requirements": null,
            "canFinishInstantly": true
        },
        "34": {
            "buildingType": 34,
            "costs": {
                "1": 155,
                "2": 130,
                "3": 125,
                "4": 70
            },
            "time": 35,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 1,
                "villageType": 1,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 5,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "35": {
            "buildingType": 35,
            "costs": {
                "1": 1460,
                "2": 930,
                "3": 1250,
                "4": 1740
            },
            "time": 690,
            "tribeId": 2,
            "category": 1,
            "requirements": [{
                "type": 1,
                "villageType": 1,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 11,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 16,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "36": {
            "buildingType": 36,
            "costs": {
                "1": 80,
                "2": 120,
                "3": 70,
                "4": 90
            },
            "time": 35,
            "tribeId": 3,
            "category": 2,
            "requirements": [{
                "type": 2,
                "buildingType": 16,
                "minLvl": 1,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "38": {
            "buildingType": 38,
            "costs": {
                "1": 650,
                "2": 800,
                "3": 450,
                "4": 200
            },
            "time": 660,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 1,
                "villageType": 4,
                "op": 0,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "39": {
            "buildingType": 39,
            "costs": {
                "1": 400,
                "2": 500,
                "3": 350,
                "4": 100
            },
            "time": 630,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 15,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 1,
                "villageType": 4,
                "op": 0,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "40": {
            "buildingType": 40,
            "costs": {
                "1": 66700,
                "2": 69050,
                "3": 72200,
                "4": 13200
            },
            "time": 3600,
            "tribeId": 5,
            "category": 1,
            "requirements": [{
                "type": 1,
                "villageType": 4,
                "op": 0,
                "valid": 0
            }],
            "canFinishInstantly": false
        },
        "41": {
            "buildingType": 41,
            "costs": {
                "1": 780,
                "2": 420,
                "3": 660,
                "4": 540
            },
            "time": 660,
            "tribeId": 1,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 16,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 20,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "42": {
            "buildingType": 42,
            "costs": {
                "1": 740,
                "2": 850,
                "3": 960,
                "4": 620
            },
            "time": 355,
            "tribeId": 0,
            "category": 2,
            "requirements": [{
                "type": 1,
                "villageType": 2,
                "op": 0,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "43": {
            "buildingType": 43,
            "costs": {
                "1": 120,
                "2": 200,
                "3": 0,
                "4": 80
            },
            "time": 35,
            "tribeId": 5,
            "category": 2,
            "requirements": null,
            "canFinishInstantly": true
        },
        "44": {
            "buildingType": 44,
            "costs": {
                "1": 1460,
                "2": 930,
                "3": 1250,
                "4": 1740
            },
            "time": 690,
            "tribeId": 2,
            "category": 1,
            "requirements": [{
                "type": 1,
                "villageType": 1,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 11,
                "minLvl": 20,
                "op": 5,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 16,
                "minLvl": 10,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": true
        },
        "45": {
            "buildingType": 45,
            "costs": {
                "1": 720,
                "2": 685,
                "3": 645,
                "4": 250
            },
            "time": 2040,
            "tribeId": 0,
            "category": 1,
            "requirements": [{
                "type": 2,
                "buildingType": 27,
                "minLvl": -1,
                "op": 0,
                "valid": 0
            }, {
                "type": 2,
                "buildingType": 15,
                "minLvl": 3,
                "op": 5,
                "valid": 0
            }],
            "canFinishInstantly": false
        }
    },
    "celebrationConfig": {
        "celebrationTypeSmall": 1,
        "celebrationTypeBig": 2,
        "celebrationTypeBrewery": 3,
        "celebrationCultureBonusSmall": 500,
        "celebrationCultureBonusBig": 2000,
        "celebrationLoyaltyBonusBig": 5,
        "publicFestivalAttackPercentBonus": 1,
        "firstLevelOfTownHallForBigCelebration": 10,
        "villageCountForBigCelebration": 2
    },
    "heroItems": {
        "4": {
            "slot": 1,
            "images": ["helmet1_0"]
        },
        "5": {
            "slot": 1,
            "images": ["helmet1_1"]
        },
        "6": {
            "slot": 1,
            "images": ["helmet1_2"]
        },
        "7": {
            "slot": 1,
            "images": ["helmet2_0"]
        },
        "8": {
            "slot": 1,
            "images": ["helmet2_1"]
        },
        "9": {
            "slot": 1,
            "images": ["helmet2_2"]
        },
        "10": {
            "slot": 1,
            "images": ["helmet3_0"]
        },
        "11": {
            "slot": 1,
            "images": ["helmet3_1"]
        },
        "12": {
            "slot": 1,
            "images": ["helmet3_2"]
        },
        "13": {
            "slot": 1,
            "images": ["helmet4_0"]
        },
        "14": {
            "slot": 1,
            "images": ["helmet4_1"]
        },
        "15": {
            "slot": 1,
            "images": ["helmet4_2"]
        },
        "16": {
            "slot": 2,
            "images": ["sword0_0"],
            "tribeId": 1,
            "unitBonus": 1,
            "bonusStrength": 3
        },
        "17": {
            "slot": 2,
            "images": ["sword0_1"],
            "tribeId": 1,
            "unitBonus": 1,
            "bonusStrength": 4
        },
        "18": {
            "slot": 2,
            "images": ["sword0_2"],
            "tribeId": 1,
            "unitBonus": 1,
            "bonusStrength": 5
        },
        "19": {
            "slot": 2,
            "images": ["sword1_0"],
            "tribeId": 1,
            "unitBonus": 2,
            "bonusStrength": 3
        },
        "20": {
            "slot": 2,
            "images": ["sword1_1"],
            "tribeId": 1,
            "unitBonus": 2,
            "bonusStrength": 4
        },
        "21": {
            "slot": 2,
            "images": ["sword1_2"],
            "tribeId": 1,
            "unitBonus": 2,
            "bonusStrength": 5
        },
        "22": {
            "slot": 2,
            "images": ["sword2_0"],
            "tribeId": 1,
            "unitBonus": 3,
            "bonusStrength": 3
        },
        "23": {
            "slot": 2,
            "images": ["sword2_1"],
            "tribeId": 1,
            "unitBonus": 3,
            "bonusStrength": 4
        },
        "24": {
            "slot": 2,
            "images": ["sword2_2"],
            "tribeId": 1,
            "unitBonus": 3,
            "bonusStrength": 5
        },
        "25": {
            "slot": 2,
            "images": ["sword3_0"],
            "tribeId": 1,
            "unitBonus": 5,
            "bonusStrength": 9
        },
        "26": {
            "slot": 2,
            "images": ["sword3_1"],
            "tribeId": 1,
            "unitBonus": 5,
            "bonusStrength": 12
        },
        "27": {
            "slot": 2,
            "images": ["sword3_2"],
            "tribeId": 1,
            "unitBonus": 5,
            "bonusStrength": 15
        },
        "28": {
            "slot": 2,
            "images": ["lance0_0"],
            "tribeId": 1,
            "unitBonus": 6,
            "bonusStrength": 12
        },
        "29": {
            "slot": 2,
            "images": ["lance0_1"],
            "tribeId": 1,
            "unitBonus": 6,
            "bonusStrength": 16
        },
        "30": {
            "slot": 2,
            "images": ["lance0_2"],
            "tribeId": 1,
            "unitBonus": 6,
            "bonusStrength": 20
        },
        "31": {
            "slot": 2,
            "images": ["spear0_0"],
            "tribeId": 3,
            "unitBonus": 1,
            "bonusStrength": 3
        },
        "32": {
            "slot": 2,
            "images": ["spear0_1"],
            "tribeId": 3,
            "unitBonus": 1,
            "bonusStrength": 4
        },
        "33": {
            "slot": 2,
            "images": ["spear0_2"],
            "tribeId": 3,
            "unitBonus": 1,
            "bonusStrength": 5
        },
        "34": {
            "slot": 2,
            "images": ["sword4_0"],
            "tribeId": 3,
            "unitBonus": 2,
            "bonusStrength": 3
        },
        "35": {
            "slot": 2,
            "images": ["sword4_1"],
            "tribeId": 3,
            "unitBonus": 2,
            "bonusStrength": 4
        },
        "36": {
            "slot": 2,
            "images": ["sword4_2"],
            "tribeId": 3,
            "unitBonus": 2,
            "bonusStrength": 5
        },
        "37": {
            "slot": 2,
            "images": ["bow0_0"],
            "tribeId": 3,
            "unitBonus": 4,
            "bonusStrength": 6
        },
        "38": {
            "slot": 2,
            "images": ["bow0_1"],
            "tribeId": 3,
            "unitBonus": 4,
            "bonusStrength": 8
        },
        "39": {
            "slot": 2,
            "images": ["bow0_2"],
            "tribeId": 3,
            "unitBonus": 4,
            "bonusStrength": 10
        },
        "40": {
            "slot": 2,
            "images": ["staff0_0"],
            "tribeId": 3,
            "unitBonus": 5,
            "bonusStrength": 6
        },
        "41": {
            "slot": 2,
            "images": ["staff0_1"],
            "tribeId": 3,
            "unitBonus": 5,
            "bonusStrength": 8
        },
        "42": {
            "slot": 2,
            "images": ["staff0_2"],
            "tribeId": 3,
            "unitBonus": 5,
            "bonusStrength": 10
        },
        "43": {
            "slot": 2,
            "images": ["spear1_0"],
            "tribeId": 3,
            "unitBonus": 6,
            "bonusStrength": 9
        },
        "44": {
            "slot": 2,
            "images": ["spear1_1"],
            "tribeId": 3,
            "unitBonus": 6,
            "bonusStrength": 12
        },
        "45": {
            "slot": 2,
            "images": ["spear1_2"],
            "tribeId": 3,
            "unitBonus": 6,
            "bonusStrength": 15
        },
        "46": {
            "slot": 2,
            "images": ["club0_0"],
            "tribeId": 2,
            "unitBonus": 1,
            "bonusStrength": 3
        },
        "47": {
            "slot": 2,
            "images": ["club0_1"],
            "tribeId": 2,
            "unitBonus": 1,
            "bonusStrength": 4
        },
        "48": {
            "slot": 2,
            "images": ["club0_2"],
            "tribeId": 2,
            "unitBonus": 1,
            "bonusStrength": 5
        },
        "49": {
            "slot": 2,
            "images": ["spear2_0"],
            "tribeId": 2,
            "unitBonus": 2,
            "bonusStrength": 3
        },
        "50": {
            "slot": 2,
            "images": ["spear2_1"],
            "tribeId": 2,
            "unitBonus": 2,
            "bonusStrength": 4
        },
        "51": {
            "slot": 2,
            "images": ["spear2_2"],
            "tribeId": 2,
            "unitBonus": 2,
            "bonusStrength": 5
        },
        "52": {
            "slot": 2,
            "images": ["axe0_0"],
            "tribeId": 2,
            "unitBonus": 3,
            "bonusStrength": 3
        },
        "53": {
            "slot": 2,
            "images": ["axe0_1"],
            "tribeId": 2,
            "unitBonus": 3,
            "bonusStrength": 4
        },
        "54": {
            "slot": 2,
            "images": ["axe0_2"],
            "tribeId": 2,
            "unitBonus": 3,
            "bonusStrength": 5
        },
        "55": {
            "slot": 2,
            "images": ["hammer0_0"],
            "tribeId": 2,
            "unitBonus": 5,
            "bonusStrength": 6
        },
        "56": {
            "slot": 2,
            "images": ["hammer0_1"],
            "tribeId": 2,
            "unitBonus": 5,
            "bonusStrength": 8
        },
        "57": {
            "slot": 2,
            "images": ["hammer0_2"],
            "tribeId": 2,
            "unitBonus": 5,
            "bonusStrength": 10
        },
        "58": {
            "slot": 2,
            "images": ["sword5_0"],
            "tribeId": 2,
            "unitBonus": 6,
            "bonusStrength": 9
        },
        "59": {
            "slot": 2,
            "images": ["sword5_1"],
            "tribeId": 2,
            "unitBonus": 6,
            "bonusStrength": 12
        },
        "60": {
            "slot": 2,
            "images": ["sword5_2"],
            "tribeId": 2,
            "unitBonus": 6,
            "bonusStrength": 15
        },
        "61": {
            "slot": 3,
            "images": ["map0_0"]
        },
        "62": {
            "slot": 3,
            "images": ["map0_1"]
        },
        "63": {
            "slot": 3,
            "images": ["map0_2"]
        },
        "64": {
            "slot": 3,
            "images": ["flag0_0"]
        },
        "65": {
            "slot": 3,
            "images": ["flag0_1"]
        },
        "66": {
            "slot": 3,
            "images": ["flag0_2"]
        },
        "67": {
            "slot": 3,
            "images": ["flag1_0"]
        },
        "68": {
            "slot": 3,
            "images": ["flag1_1"]
        },
        "69": {
            "slot": 3,
            "images": ["flag1_2"]
        },
        "70": {
            "slot": 3,
            "images": ["telescope0_0"]
        },
        "71": {
            "slot": 3,
            "images": ["telescope0_1"]
        },
        "72": {
            "slot": 3,
            "images": ["telescope0_2"]
        },
        "73": {
            "slot": 3,
            "images": ["sack0_0"]
        },
        "74": {
            "slot": 3,
            "images": ["sack0_1"]
        },
        "75": {
            "slot": 3,
            "images": ["sack0_2"]
        },
        "76": {
            "slot": 3,
            "images": ["shield0_0"]
        },
        "77": {
            "slot": 3,
            "images": ["shield0_1"]
        },
        "78": {
            "slot": 3,
            "images": ["shield0_2"]
        },
        "79": {
            "slot": 3,
            "images": ["horn0_0"]
        },
        "80": {
            "slot": 3,
            "images": ["horn0_1"]
        },
        "81": {
            "slot": 3,
            "images": ["horn0_2"]
        },
        "82": {
            "slot": 4,
            "images": ["shirt0_0"]
        },
        "83": {
            "slot": 4,
            "images": ["shirt0_1"]
        },
        "84": {
            "slot": 4,
            "images": ["shirt0_2"]
        },
        "85": {
            "slot": 4,
            "images": ["shirt1_0"]
        },
        "86": {
            "slot": 4,
            "images": ["shirt1_1"]
        },
        "87": {
            "slot": 4,
            "images": ["shirt1_2"]
        },
        "88": {
            "slot": 4,
            "images": ["shirt2_0"]
        },
        "89": {
            "slot": 4,
            "images": ["shirt2_1"]
        },
        "90": {
            "slot": 4,
            "images": ["shirt2_2"]
        },
        "91": {
            "slot": 4,
            "images": ["shirt3_0"]
        },
        "92": {
            "slot": 4,
            "images": ["shirt3_1"]
        },
        "93": {
            "slot": 4,
            "images": ["shirt3_2"]
        },
        "94": {
            "slot": 5,
            "images": ["shoes0_0"]
        },
        "95": {
            "slot": 5,
            "images": ["shoes0_1"]
        },
        "96": {
            "slot": 5,
            "images": ["shoes0_2"]
        },
        "97": {
            "slot": 5,
            "images": ["shoes1_0"]
        },
        "98": {
            "slot": 5,
            "images": ["shoes1_1"]
        },
        "99": {
            "slot": 5,
            "images": ["shoes1_2"]
        },
        "100": {
            "slot": 5,
            "images": ["shoes2_0"]
        },
        "101": {
            "slot": 5,
            "images": ["shoes2_1"]
        },
        "102": {
            "slot": 5,
            "images": ["shoes2_2"]
        },
        "103": {
            "slot": 6,
            "images": ["horse1_0"]
        },
        "104": {
            "slot": 6,
            "images": ["horse1_1"]
        },
        "105": {
            "slot": 6,
            "images": ["horse1_2"]
        },
        "106": {
            "slot": 6,
            "images": ["horse2_0"]
        },
        "107": {
            "slot": 6,
            "images": ["horse2_1"]
        },
        "108": {
            "slot": 6,
            "images": ["horse2_2"]
        },
        "109": {
            "slot": 6,
            "images": ["horse0_0"]
        },
        "110": {
            "slot": 6,
            "images": ["horse0_1"]
        },
        "111": {
            "slot": 6,
            "images": ["horse0_2"]
        },
        "112": {
            "slot": -1,
            "images": ["ointment"]
        },
        "113": {
            "slot": -1,
            "images": ["scroll"]
        },
        "114": {
            "slot": -1,
            "images": ["water_bucket"]
        },
        "115": {
            "slot": -1,
            "images": ["book"]
        },
        "116": {
            "slot": -1,
            "images": ["artwork"]
        },
        "117": {
            "slot": 7,
            "images": ["small_bandage"]
        },
        "118": {
            "slot": 7,
            "images": ["bandage"]
        },
        "119": {
            "slot": 7,
            "images": ["cage"]
        },
        "120": {
            "slot": -1,
            "images": ["treasures"]
        },
        "121": {
            "slot": 5,
            "images": ["shoes3_0"]
        },
        "122": {
            "slot": 5,
            "images": ["shoes3_1"]
        },
        "123": {
            "slot": 5,
            "images": ["shoes3_2"]
        }
    },
    "exchangeOffice": {
        "silverToGoldRate": 200,
        "goldToSilverRate": 100,
        "maxAmount": 99999
    },
    "PremiumFeatures": {
        "extendTimeBeforeExpires": 86400,
        "estimatedWorldAge": 141,
        "minimumPriceMultiplier": 5,
        "discountPriceFactor": 0.714285714285,
        "finishNow": {
            "price": 3,
            "active": true
        },
        "exchangeOffice": {
            "price": 1,
            "active": true
        },
        "productionBonus": {
            "price": 15,
            "active": true,
            "duration": 604800,
            "durationSpeed": 259200,
            "bonusValue": 25,
            "bookableWholeGameRound": false
        },
        "cropProductionBonus": {
            "price": 10,
            "active": true,
            "duration": 604800,
            "durationSpeed": 259200,
            "bonusValue": 25,
            "bookableWholeGameRound": false
        },
        "NPCTrader": {
            "price": 4,
            "active": true
        },
        "tributeFetchInstantly": {
            "price": 1,
            "active": true
        },
        "plusAccount": {
            "price": 10,
            "active": true,
            "duration": 604800,
            "durationSpeed": 259200,
            "bookableWholeGameRound": false
        },
        "starterPackage": {
            "price": 60,
            "active": true,
            "deactivateAfterSignUp": 2592000,
            "duration": 604800
        },
        "buildingMasterSlot": {
            "price": 50,
            "price2": 75,
            "price3": 100,
            "active": true
        },
        "treasureResourcesInstant": {
            "price": 3,
            "active": true
        },
        "traderArriveInstantly": {
            "price": 2,
            "active": true
        },
        "traderSlot": {
            "price": 50,
            "price2": 25,
            "active": true
        }
    },
    "fetchingDurationMultiplier": 3,
    "paymentShopDisabled": false,
    "natarVillageActivationTime": 9590400,
    "endWorldWithWorldWonderLevel": 100,
    "KingdomConfig": {
        "treasureInfluenceBonuses": [{
            "treasures": 100,
            "factor": 1.25
        }, {
            "treasures": 200,
            "factor": 1.35
        }, {
            "treasures": 300,
            "factor": 1.5
        }, {
            "treasures": 400,
            "factor": 1.65
        }, {
            "treasures": 500,
            "factor": 1.8
        }, {
            "treasures": 600,
            "factor": 2
        }, {
            "treasures": 700,
            "factor": 2.2
        }, {
            "treasures": 800,
            "factor": 2.4
        }, {
            "treasures": 900,
            "factor": 2.6
        }, {
            "treasures": 1000,
            "factor": 2.8
        }, {
            "treasures": 1250,
            "factor": 3
        }, {
            "treasures": 1500,
            "factor": 3.2
        }, {
            "treasures": 1750,
            "factor": 3.4
        }, {
            "treasures": 2000,
            "factor": 3.6
        }, {
            "treasures": 2250,
            "factor": 3.8
        }, {
            "treasures": 2500,
            "factor": 4
        }, {
            "treasures": 2750,
            "factor": 4.2
        }, {
            "treasures": 3000,
            "factor": 4.4
        }, {
            "treasures": 3500,
            "factor": 4.6
        }, {
            "treasures": 4000,
            "factor": 5
        }],
        "dukeSlots": [0, 0, 1000, 2000, 4000, 8000, 16000, 32000]
    },
    "AllianceConfig": {
        "maxAllowedKingsInAlliance": 3
    },
    "charLimits": {
        "shareMessageCharLimit": 160,
        "societyInvitationCharLimit": 250
    },
    "NoobProtectionDays": {
        "King": 1,
        "Governor": 7
    },
    "DeletionAfterBuyingGoldTimeout": 604800,
    "worldRadius": "120",
    "teahouse": "false",
    "tzone_offset": 1,
    "defaultTimeFormat": 0,
    "apiVersion": "0.38.10",
    "gameRulesUrl": "http:\/\/kingdoms.travian.com\/#to-rules",
    "selectableLanguages": [],
    "countryId": "fr"
};
// Values modifyer
Travian.Config.worldRadius = -1;
Travian.Config.teahouse = false;
Travian.Config.questVersion = 1;
Travian.Config.countryId = null;
Travian.Config.worldStart   = 0;

Travian.troop     = [];
Travian.troop[0]  = {};
Travian.troop[1]  = {tribe: 1, costs: [75, 50, 100, 0], time: 1600, supply: 1, speed: 6, carry: 50, att: 40, defI: 35, defC: 50};
Travian.troop[2]  = {tribe: 1, costs: [80, 100, 160, 0], time: 1760, supply: 1, speed: 5, carry: 20, att: 30, defI: 65, defC: 35};
Travian.troop[3]  = {tribe: 1, costs: [100, 110, 140, 0], time: 1920, supply: 1, speed: 7, carry: 50, att: 70, defI: 40, defC: 25};
Travian.troop[4]  = {tribe: 1, costs: [100, 140, 10, 0], time: 1360, supply: 2, speed: 16, carry: 0, att: 0, defI: 20, defC: 10};
Travian.troop[5]  = {tribe: 1, costs: [350, 260, 180, 0], time: 2640, supply: 3, speed: 14, carry: 100, att: 120, defI: 65, defC: 50};
Travian.troop[6]  = {tribe: 1, costs: [280, 340, 600, 0], time: 3520, supply: 4, speed: 10, carry: 70, att: 180, defI: 80, defC: 105};
Travian.troop[7]  = {tribe: 1, costs: [700, 180, 400, 0], time: 4600, supply: 3, speed: 4, carry: 0, att: 60, defI: 30, defC: 75};
Travian.troop[8]  = {tribe: 1, costs: [690, 1000, 400, 0], time: 9000, supply: 6, speed: 3, carry: 0, att: 75, defI: 60, defC: 10};
Travian.troop[9]  = {tribe: 1, costs: [30750, 27200, 45000, 0], time: 90700, supply: 5, speed: 4, carry: 0, att: 50, defI: 40, defC: 30};
Travian.troop[10] = {tribe: 1, costs: [3500, 3000, 4500, 0], time: 26900, supply: 1, speed: 5, carry: 3000, att: 0, defI: 80, defC: 80};
Travian.troop[11] = {tribe: 2, costs: [85, 65, 30, 0], time: 720, supply: 1, speed: 7, carry: 60, att: 40, defI: 20, defC: 5};
Travian.troop[12] = {tribe: 2, costs: [125, 50, 65, 0], time: 1120, supply: 1, speed: 7, carry: 40, att: 10, defI: 35, defC: 60};
Travian.troop[13] = {tribe: 2, costs: [80, 65, 130, 0], time: 1200, supply: 1, speed: 6, carry: 50, att: 60, defI: 30, defC: 30};
Travian.troop[14] = {tribe: 2, costs: [140, 80, 30, 0], time: 1120, supply: 1, speed: 9, carry: 0, att: 0, defI: 10, defC: 5};
Travian.troop[15] = {tribe: 2, costs: [330, 170, 200, 0], time: 2400, supply: 2, speed: 10, carry: 110, att: 55, defI: 100, defC: 40};
Travian.troop[16] = {tribe: 2, costs: [280, 320, 260, 0], time: 2960, supply: 3, speed: 9, carry: 80, att: 150, defI: 50, defC: 75};
Travian.troop[17] = {tribe: 2, costs: [800, 150, 250, 0], time: 4200, supply: 3, speed: 4, carry: 0, att: 65, defI: 30, defC: 80};
Travian.troop[18] = {tribe: 2, costs: [660, 900, 370, 0], time: 9000, supply: 6, speed: 3, carry: 0, att: 50, defI: 60, defC: 10};
Travian.troop[19] = {tribe: 2, costs: [35500, 26600, 25000, 0], time: 70500, supply: 4, speed: 4, carry: 0, att: 40, defI: 60, defC: 40};
Travian.troop[20] = {tribe: 2, costs: [4000, 3500, 3200, 0], time: 31000, supply: 1, speed: 5, carry: 3000, att: 10, defI: 80, defC: 80};
Travian.troop[21] = {tribe: 3, costs: [85, 100, 50, 0], time: 1040, supply: 1, speed: 7, carry: 35, att: 15, defI: 40, defC: 50};
Travian.troop[22] = {tribe: 3, costs: [95, 60, 140, 0], time: 1440, supply: 1, speed: 6, carry: 45, att: 65, defI: 35, defC: 20};
Travian.troop[23] = {tribe: 3, costs: [140, 110, 20, 0], time: 1360, supply: 2, speed: 17, carry: 0, att: 0, defI: 20, defC: 10};
Travian.troop[24] = {tribe: 3, costs: [200, 280, 130, 0], time: 2480, supply: 2, speed: 19, carry: 75, att: 90, defI: 25, defC: 40};
Travian.troop[25] = {tribe: 3, costs: [300, 270, 190, 0], time: 2560, supply: 2, speed: 16, carry: 35, att: 45, defI: 115, defC: 55};
Travian.troop[26] = {tribe: 3, costs: [300, 380, 440, 0], time: 3120, supply: 3, speed: 13, carry: 65, att: 140, defI: 60, defC: 165};
Travian.troop[27] = {tribe: 3, costs: [750, 370, 220, 0], time: 5000, supply: 3, speed: 4, carry: 0, att: 50, defI: 30, defC: 105};
Travian.troop[28] = {tribe: 3, costs: [590, 1200, 400, 0], time: 9000, supply: 6, speed: 3, carry: 0, att: 70, defI: 45, defC: 10};
Travian.troop[29] = {tribe: 3, costs: [30750, 45400, 31000, 0], time: 90700, supply: 4, speed: 5, carry: 0, att: 40, defI: 50, defC: 50};
Travian.troop[30] = {tribe: 3, costs: [3000, 4000, 3000, 0], time: 22700, supply: 1, speed: 5, carry: 3000, att: 0, defI: 80, defC: 80};
Travian.troop[31] = {tribe: 4, costs: [100, 100, 100, 100], time: 300, supply: 1, speed: 20, carry: 0, att: 10, defI: 25, defC: 20};
Travian.troop[32] = {tribe: 4, costs: [100, 100, 100, 100], time: 360, supply: 1, speed: 20, carry: 0, att: 20, defI: 35, defC: 40};
Travian.troop[33] = {tribe: 4, costs: [100, 100, 100, 100], time: 420, supply: 1, speed: 20, carry: 0, att: 60, defI: 40, defC: 60};
Travian.troop[34] = {tribe: 4, costs: [100, 100, 100, 100], time: 480, supply: 1, speed: 20, carry: 0, att: 80, defI: 66, defC: 50};
Travian.troop[35] = {tribe: 4, costs: [100, 100, 100, 100], time: 540, supply: 2, speed: 20, carry: 0, att: 50, defI: 70, defC: 33};
Travian.troop[36] = {tribe: 4, costs: [100, 100, 100, 100], time: 600, supply: 2, speed: 20, carry: 0, att: 100, defI: 80, defC: 70};
Travian.troop[37] = {tribe: 4, costs: [100, 100, 100, 100], time: 660, supply: 3, speed: 20, carry: 0, att: 250, defI: 140, defC: 200};
Travian.troop[38] = {tribe: 4, costs: [100, 100, 100, 100], time: 720, supply: 3, speed: 20, carry: 0, att: 450, defI: 380, defC: 240};
Travian.troop[39] = {tribe: 4, costs: [100, 100, 100, 100], time: 780, supply: 3, speed: 20, carry: 0, att: 200, defI: 170, defC: 250};
Travian.troop[40] = {tribe: 4, costs: [100, 100, 100, 100], time: 840, supply: 5, speed: 20, carry: 0, att: 600, defI: 440, defC: 520};
Travian.troop[41] = {tribe: 5, costs: [100, 100, 100, 50], time: 240, supply: 1, speed: 6, carry: 10, att: 20, defI: 35, defC: 50};
Travian.troop[42] = {tribe: 5, costs: [100, 100, 100, 50], time: 240, supply: 1, speed: 7, carry: 10, att: 65, defI: 30, defC: 10};
Travian.troop[43] = {tribe: 5, costs: [150, 150, 150, 150], time: 360, supply: 1, speed: 6, carry: 10, att: 100, defI: 90, defC: 75};
Travian.troop[44] = {tribe: 5, costs: [50, 50, 50, 75], time: 120, supply: 1, speed: 25, carry: 10, att: 0, defI: 10, defC: 10};
Travian.troop[45] = {tribe: 5, costs: [300, 150, 150, 100], time: 480, supply: 2, speed: 14, carry: 10, att: 155, defI: 80, defC: 50};
Travian.troop[46] = {tribe: 5, costs: [250, 250, 400, 150], time: 600, supply: 3, speed: 12, carry: 10, att: 170, defI: 140, defC: 80};
Travian.troop[47] = {tribe: 5, costs: [400, 300, 300, 400], time: 720, supply: 4, speed: 5, carry: 10, att: 250, defI: 120, defC: 150};
Travian.troop[48] = {tribe: 5, costs: [200, 200, 200, 100], time: 600, supply: 5, speed: 3, carry: 10, att: 60, defI: 45, defC: 10};
Travian.troop[49] = {tribe: 5, costs: [1000, 1000, 1000, 1000], time: 1800, supply: 1, speed: 5, carry: 10, att: 80, defI: 50, defC: 50};
Travian.troop[50] = {tribe: 5, costs: [200, 200, 200, 200], time: 1800, supply: 1, speed: 5, carry: 3000, att: 30, defI: 40, defC: 40};

/* Troop upgrade costs */
Travian.troop[1].upgrades  = [
    [0, 0, 0], [800, 520, 1040], [1395, 905, 1810], [1925, 1250, 2505], [2425, 1575, 3155], [2900, 1885, 3770], [3355, 2180, 4360], [3795, 2465, 4935], [4220, 2745, 5490], [4640, 3015, 6030], [5050, 3280, 6560], [5450, 3540, 7080], [5840, 3795, 7590], [6225, 4045, 8095], [6605, 4295, 8590], [6980, 4540, 9075], [7350, 4780, 9555], [7715, 5015, 10030], [8080, 5250, 10500], [8435, 5485, 10965], [8790, 5715, 11425]
]; // Legionnaire
Travian.troop[2].upgrades  = [
    [0, 0, 0],
    [660, 800, 1180],
    [1150, 1395, 2055],
    [1590, 1925, 2840],
    [2000, 2425, 3575],
    [2390, 2900, 4275],
    [2765, 3355, 4950],
    [3130, 3795, 5595],
    [3485, 4220, 6230],
    [3830, 4640, 6845],
    [4165, 5050, 7445],
    [4495, 5450, 8035],
    [4820, 5840, 8615],
    [5135, 6225, 9185],
    [5450, 6605, 9745],
    [5760, 6980, 10300],
    [6065, 7350, 10845],
    [6365, 7715, 11385],
    [6665, 8080, 11915],
    [6960, 8435, 12440],
    [7250, 8790, 12965]
]; // Praetorian
Travian.troop[3].upgrades  = [
    [0, 0, 0],
    [940, 1010, 1390],
    [1635, 1760, 2420],
    [2265, 2430, 3345],
    [2850, 3060, 4215],
    [3405, 3660, 5035],
    [3940, 4235, 5830],
    [4460, 4790, 6595],
    [4960, 5330, 7335],
    [5450, 5860, 8060],
    [5930, 6375, 8770],
    [6400, 6880, 9465],
    [6860, 7375, 10150],
    [7315, 7860, 10820],
    [7765, 8340, 11480],
    [8205, 8815, 12130],
    [8640, 9280, 12775],
    [9065, 9745, 13410],
    [9490, 10200, 14035],
    [9910, 10650, 14655],
    [10325, 11095, 15270]
]; // Imperian
Travian.troop[4].upgrades  = [
    [0, 0, 0],
    [400, 540, 135],
    [695, 940, 235],
    [965, 1300, 325],
    [1215, 1635, 410],
    [1450, 1955, 490],
    [1675, 2265, 565],
    [1895, 2560, 640],
    [2110, 2850, 715],
    [2320, 3130, 785],
    [2525, 3405, 850],
    [2725, 3675, 920],
    [2920, 3940, 985],
    [3115, 4205, 1050],
    [3305, 4460, 1115],
    [3490, 4715, 1180],
    [3675, 4960, 1240],
    [3860, 5210, 1300],
    [4040, 5455, 1365],
    [4220, 5695, 1425],
    [4395, 5930, 1485]
]; // Equites Legati
Travian.troop[5].upgrades  = [
    [0, 0, 0],
    [1060, 805, 580],
    [1845, 1400, 1010],
    [2555, 1935, 1395],
    [3215, 2435, 1760],
    [3840, 2910, 2100],
    [4445, 3370, 2430],
    [5030, 3810, 2750],
    [5595, 4240, 3060],
    [6150, 4660, 3365],
    [6690, 5070, 3660],
    [7220, 5470, 3950],
    [7740, 5865, 4235],
    [8250, 6250, 4515],
    [8755, 6635, 4790],
    [9250, 7010, 5060],
    [9740, 7380, 5330],
    [10225, 7750, 5595],
    [10705, 8110, 5855],
    [11175, 8470, 6115],
    [11645, 8825, 6370]
]; // Equites Imperatoris
Travian.troop[6].upgrades  = [
    [0, 0, 0],
    [675, 815, 1275],
    [1170, 1415, 2220],
    [1620, 1955, 3070],
    [2040, 2465, 3865],
    [2435, 2945, 4620],
    [2820, 3405, 5345],
    [3190, 3855, 6050],
    [3550, 4290, 6730],
    [3900, 4710, 7395],
    [4245, 5125, 8045],
    [4580, 5535, 8680],
    [4910, 5930, 9310],
    [5235, 6325, 9925],
    [5555, 6710, 10530],
    [5870, 7090, 11125],
    [6180, 7465, 11715],
    [6485, 7840, 12300],
    [6790, 8205, 12875],
    [7090, 8565, 13445],
    [7390, 8925, 14005]
]; // Equites Caesaris
Travian.troop[7].upgrades  = [
    [0, 0, 0],
    [1665, 455, 1000],
    [2900, 790, 1740],
    [4015, 1090, 2410],
    [5050, 1375, 3030],
    [6040, 1645, 3625],
    [6990, 1900, 4195],
    [7905, 2150, 4745],
    [8795, 2395, 5280],
    [9665, 2630, 5800],
    [10515, 2860, 6310],
    [11350, 3085, 6810],
    [12165, 3310, 7300],
    [12970, 3530, 7785],
    [13765, 3745, 8260],
    [14545, 3955, 8725],
    [15315, 4165, 9190],
    [16075, 4375, 9645],
    [16830, 4580, 10100],
    [17575, 4780, 10545],
    [18310, 4980, 10985]
]; // Battering Ram
Travian.troop[8].upgrades  = [
    [0, 0, 0],
    [820, 1185, 500],
    [1430, 2060, 870],
    [1980, 2850, 1205],
    [2490, 3585, 1515],
    [2980, 4290, 1810],
    [3445, 4960, 2095],
    [3895, 5615, 2370],
    [4335, 6245, 2640],
    [4765, 6865, 2900],
    [5185, 7465, 3155],
    [5595, 8060, 3405],
    [6000, 8640, 3650],
    [6395, 9210, 3890],
    [6785, 9775, 4130],
    [7170, 10325, 4365],
    [7550, 10875, 4595],
    [7925, 11415, 4825],
    [8295, 11950, 5050],
    [8665, 12475, 5270],
    [9025, 13000, 5495]
]; // Fire Catapult
Travian.troop[9].upgrades  = null; // Senator
Travian.troop[10].upgrades = null; // Settler
Travian.troop[11].upgrades = [
    [0, 0, 0],
    [695, 555, 410],
    [1210, 965, 715],
    [1675, 1335, 985],
    [2105, 1680, 1245],
    [2520, 2010, 1485],
    [2915, 2325, 1720],
    [3295, 2635, 1945],
    [3670, 2930, 2165],
    [4030, 3220, 2380],
    [4385, 3500, 2585],
    [4735, 3780, 2790],
    [5075, 4050, 2995],
    [5410, 4320, 3190],
    [5740, 4585, 3385],
    [6065, 4845, 3580],
    [6385, 5100, 3770],
    [6705, 5355, 3955],
    [7020, 5605, 4140],
    [7330, 5850, 4325],
    [7635, 6095, 4505]
]; // Clubswinger 
Travian.troop[12].upgrades = [
    [0, 0, 0],
    [975, 450, 655],
    [1700, 785, 1140],
    [2350, 1085, 1575],
    [2955, 1365, 1985],
    [3535, 1630, 2375],
    [4090, 1885, 2745],
    [4625, 2135, 3105],
    [5145, 2375, 3455],
    [5655, 2610, 3800],
    [6150, 2840, 4135],
    [6640, 3065, 4460],
    [7120, 3285, 4780],
    [7590, 3500, 5100],
    [8050, 3715, 5410],
    [8510, 3925, 5715],
    [8960, 4135, 6020],
    [9405, 4340, 6320],
    [9845, 4545, 6615],
    [10280, 4745, 6905],
    [10710, 4945, 7195]
]; // Spearfighter
Travian.troop[13].upgrades = [
    [0, 0, 0],
    [800, 660, 1320],
    [1395, 1150, 2300],
    [1925, 1590, 3180],
    [2425, 2000, 4000],
    [2900, 2390, 4785],
    [3355, 2765, 5535],
    [3795, 3130, 6260],
    [4220, 3485, 6965],
    [4640, 3830, 7655],
    [5050, 4165, 8330],
    [5450, 4495, 8990],
    [5840, 4820, 9635],
    [6225, 5135, 10275],
    [6605, 5450, 10900],
    [6980, 5760, 11520],
    [7350, 6065, 12130],
    [7715, 6365, 12735],
    [8080, 6665, 13330],
    [8435, 6960, 13920],
    [8790, 7250, 14500]
]; // Axefighter
Travian.troop[14].upgrades = [
    [0, 0, 0],
    [1080, 660, 410],
    [1880, 1150, 715],
    [2600, 1590, 985],
    [3275, 2000, 1245],
    [3915, 2390, 1485],
    [4530, 2765, 1720],
    [5125, 3130, 1945],
    [5700, 3485, 2165],
    [6265, 3830, 2380],
    [6815, 4165, 2585],
    [7355, 4495, 2790],
    [7885, 4820, 2995],
    [8405, 5135, 3190],
    [8920, 5450, 3385],
    [9425, 5760, 3580],
    [9925, 6065, 3770],
    [10420, 6365, 3955],
    [10905, 6665, 4140],
    [11385, 6960, 4325],
    [11865, 7250, 4505]
]; // Scout
Travian.troop[15].upgrades = [
    [0, 0, 0],
    [1205, 645, 800],
    [2100, 1125, 1395],
    [2900, 1555, 1925],
    [3655, 1955, 2425],
    [4365, 2335, 2900],
    [5055, 2705, 3355],
    [5715, 3060, 3795],
    [6360, 3405, 4220],
    [6990, 3740, 4640],
    [7605, 4070, 5050],
    [8205, 4390, 5450],
    [8795, 4710, 5840],
    [9380, 5020, 6225],
    [9950, 5325, 6605],
    [10515, 5630, 6980],
    [11075, 5925, 7350],
    [11625, 6220, 7715],
    [12170, 6515, 8080],
    [12705, 6800, 8435],
    [13240, 7085, 8790]
]; // Paladin
Travian.troop[16].upgrades = [
    [0, 0, 0],
    [850, 965, 815],
    [1480, 1685, 1415],
    [2045, 2330, 1960],
    [2575, 2930, 2465],
    [3080, 3505, 2945],
    [3565, 4055, 3410],
    [4030, 4585, 3860],
    [4485, 5100, 4295],
    [4930, 5605, 4715],
    [5365, 6100, 5130],
    [5790, 6585, 5540],
    [6205, 7055, 5940],
    [6615, 7525, 6330],
    [7020, 7985, 6715],
    [7420, 8435, 7100],
    [7810, 8885, 7475],
    [8200, 9325, 7845],
    [8585, 9760, 8215],
    [8960, 10190, 8575],
    [9340, 10620, 8935]
]; // Teutonic Knight
Travian.troop[17].upgrades = [
    [0, 0, 0],
    [1900, 385, 650],
    [3310, 665, 1130],
    [4575, 925, 1565],
    [5760, 1160, 1970],
    [6885, 1390, 2355],
    [7965, 1605, 2725],
    [9010, 1820, 3085],
    [10030, 2025, 3430],
    [11020, 2225, 3770],
    [11990, 2420, 4100],
    [12940, 2610, 4425],
    [13870, 2800, 4745],
    [14790, 2985, 5060],
    [15690, 3165, 5370],
    [16580, 3345, 5675],
    [17460, 3525, 5975],
    [18330, 3700, 6270],
    [19185, 3870, 6565],
    [20035, 4040, 6855],
    [20875, 4210, 7140]
]; // Ram
Travian.troop[18].upgrades = [
    [0, 0, 0],
    [785, 1065, 465],
    [1370, 1855, 810],
    [1895, 2570, 1120],
    [2385, 3235, 1410],
    [2850, 3865, 1685],
    [3300, 4470, 1950],
    [3730, 5060, 2205],
    [4150, 5630, 2455],
    [4560, 6185, 2695],
    [4965, 6730, 2935],
    [5355, 7265, 3165],
    [5745, 7785, 3395],
    [6125, 8300, 3620],
    [6495, 8810, 3840],
    [6865, 9310, 4060],
    [7230, 9800, 4275],
    [7590, 10290, 4485],
    [7945, 10770, 4695],
    [8295, 11245, 4905],
    [8640, 11720, 5110]
]; // Catapult
Travian.troop[19].upgrades = null; // Chief
Travian.troop[20].upgrades = null; // Settler
Travian.troop[21].upgrades = [
    [0, 0, 0],
    [660, 800, 480],
    [1150, 1395, 835],
    [1590, 1925, 1155],
    [2000, 2425, 1455],
    [2390, 2900, 1740],
    [2765, 3355, 2015],
    [3130, 3795, 2275],
    [3485, 4220, 2535],
    [3830, 4640, 2785],
    [4165, 5050, 3030],
    [4495, 5450, 3270],
    [4820, 5840, 3505],
    [5135, 6225, 3735],
    [5450, 6605, 3965],
    [5760, 6980, 4190],
    [6065, 7350, 4410],
    [6365, 7715, 4630],
    [6665, 8080, 4845],
    [6960, 8435, 5060],
    [7250, 8790, 5275]
]; // Phalanx
Travian.troop[22].upgrades = [
    [0, 0, 0],
    [940, 625, 1425],
    [1635, 1090, 2480],
    [2265, 1505, 3430],
    [2850, 1895, 4320],
    [3405, 2265, 5165],
    [3940, 2620, 5975],
    [4460, 2965, 6760],
    [4960, 3300, 7520],
    [5450, 3625, 8265],
    [5930, 3945, 8990],
    [6400, 4255, 9705],
    [6860, 4565, 10405],
    [7315, 4865, 11090],
    [7765, 5160, 11770],
    [8205, 5455, 12435],
    [8640, 5745, 13095],
    [9065, 6030, 13745],
    [9490, 6310, 14390],
    [9910, 6590, 15025],
    [10325, 6865, 15655]
]; // Swordfighter
Travian.troop[23].upgrades = [
    [0, 0, 0],
    [540, 435, 170],
    [940, 755, 295],
    [1300, 1050, 410],
    [1635, 1320, 515],
    [1955, 1575, 615],
    [2265, 1825, 715],
    [2560, 2065, 805],
    [2850, 2295, 895],
    [3130, 2525, 985],
    [3405, 2745, 1075],
    [3675, 2960, 1160],
    [3940, 3175, 1240],
    [4205, 3385, 1325],
    [4460, 3590, 1405],
    [4715, 3795, 1485],
    [4960, 3995, 1560],
    [5210, 4195, 1640],
    [5455, 4390, 1715],
    [5695, 4585, 1790],
    [5930, 4780, 1870]
]; // Pathfinder
Travian.troop[24].upgrades = [
    [0, 0, 0],
    [925, 1275, 660],
    [1610, 2220, 1150],
    [2230, 3070, 1590],
    [2805, 3865, 2000],
    [3350, 4620, 2390],
    [3880, 5345, 2765],
    [4390, 6050, 3130],
    [4880, 6730, 3485],
    [5365, 7395, 3830],
    [5835, 8045, 4165],
    [6300, 8680, 4495],
    [6755, 9310, 4820],
    [7200, 9925, 5135],
    [7640, 10530, 5450],
    [8075, 11125, 5760],
    [8500, 11715, 6065],
    [8925, 12300, 6365],
    [9340, 12875, 6665],
    [9755, 13445, 6960],
    [10160, 14005, 7250]
]; // Theutates Thunder
Travian.troop[25].upgrades = [
    [0, 0, 0],
    [1100, 995, 765],
    [1915, 1730, 1330],
    [2650, 2395, 1840],
    [3335, 3015, 2320],
    [3985, 3605, 2770],
    [4610, 4170, 3210],
    [5220, 4720, 3630],
    [5805, 5250, 4040],
    [6380, 5770, 4435],
    [6940, 6280, 4825],
    [7490, 6775, 5210],
    [8030, 7265, 5585],
    [8560, 7745, 5955],
    [9085, 8215, 6320],
    [9600, 8685, 6675],
    [10110, 9145, 7030],
    [10610, 9600, 7380],
    [11105, 10045, 7725],
    [11600, 10490, 8065],
    [12085, 10930, 8405]
]; // Druidrider
Travian.troop[26].upgrades = [
    [0, 0, 0],
    [920, 1060, 1375],
    [1600, 1845, 2390],
    [2215, 2555, 3305],
    [2790, 3215, 4165],
    [3335, 3840, 4975],
    [3860, 4445, 5760],
    [4365, 5030, 6515],
    [4855, 5595, 7250],
    [5335, 6150, 7965],
    [5805, 6690, 8665],
    [6265, 7220, 9350],
    [6715, 7740, 10025],
    [7160, 8250, 10690],
    [7600, 8755, 11340],
    [8030, 9250, 11985],
    [8455, 9740, 12620],
    [8875, 10225, 13250],
    [9290, 10705, 13865],
    [9700, 11175, 14480],
    [10105, 11645, 15085]
]; // Haeduan
Travian.troop[27].upgrades = [
    [0, 0, 0],
    [1785, 895, 580],
    [3105, 1560, 1010],
    [4295, 2160, 1395],
    [5405, 2720, 1760],
    [6465, 3250, 2100],
    [7475, 3760, 2430],
    [8460, 4255, 2750],
    [9410, 4735, 3060],
    [10345, 5200, 3365],
    [11250, 5660, 3660],
    [12145, 6105, 3950],
    [13020, 6545, 4235],
    [13880, 6980, 4515],
    [14730, 7405, 4790],
    [15565, 7825, 5060],
    [16390, 8240, 5330],
    [17205, 8650, 5595],
    [18005, 9055, 5855],
    [18805, 9455, 6115],
    [19590, 9850, 6370]
]; // Ram
Travian.troop[28].upgrades = [
    [0, 0, 0],
    [705, 1415, 500],
    [1225, 2465, 870],
    [1700, 3410, 1205],
    [2135, 4295, 1515],
    [2555, 5135, 1810],
    [2955, 5940, 2095],
    [3345, 6720, 2370],
    [3720, 7475, 2640],
    [4090, 8215, 2900],
    [4450, 8940, 3155],
    [4800, 9645, 3405],
    [5145, 10340, 3650],
    [5485, 11025, 3890],
    [5820, 11700, 4130],
    [6155, 12365, 4365],
    [6480, 13020, 4595],
    [6800, 13665, 4825],
    [7120, 14305, 5050],
    [7435, 14935, 5270],
    [7745, 15565, 5495]
]; // Trebuchet
Travian.troop[29].upgrades = null; // Chieftain
Travian.troop[30].upgrades = null; // Settler
Travian.troop[31].upgrades = null; // Rat
Travian.troop[32].upgrades = null; // Spider
Travian.troop[33].upgrades = null; // Snake
Travian.troop[34].upgrades = null; // Bat
Travian.troop[35].upgrades = null; // Boar
Travian.troop[36].upgrades = null; // Wolf
Travian.troop[37].upgrades = null; // Bear
Travian.troop[38].upgrades = null; // Crocodile
Travian.troop[39].upgrades = null; // Tiger
Travian.troop[40].upgrades = null; // Elephant
Travian.troop[41].upgrades = null; // Pikeman
Travian.troop[42].upgrades = null; // Thorned Warrior
Travian.troop[43].upgrades = null; // Guardsman
Travian.troop[44].upgrades = null; // Birds of prey
Travian.troop[45].upgrades = null; // Axerider
Travian.troop[46].upgrades = null; // Natarian Knight
Travian.troop[47].upgrades = null; // War Elephant
Travian.troop[48].upgrades = null; // Ballista
Travian.troop[49].upgrades = null; // Natarian Emperor
Travian.troop[50].upgrades = null; // Settler