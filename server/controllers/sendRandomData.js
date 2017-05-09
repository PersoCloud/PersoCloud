var config = require('../../config');
var express = require('express');
var app = express();
var async = require('async');
var request = require('request');
var schedule = require('node-schedule');
var cozydb = require('cozydb');
var model_sharingPermissions = require('../models/pc_sharing_permissions.js');

var ctrl_signature = require('./signature');
var hlp_random = require('../helpers/random');
var hlp_string = require('../helpers/string');

schedule.scheduleJob(config.server.senddata, function() { send(); });

var send = function send(req, res, next) {	
	model_sharingPermissions.all(function (err, sharing_permissions) {		
        if(err != undefined) {
            console.error(err);
        } else {	
			var generatedData = [];
			var logs = [];
			sharing_permissions.forEach(function(permission) {
				if(permission.base != undefined) {
					if(permission.key != undefined) { // Bill // Il faut détailler l'envoi de données de certain service
						var valuesAllowed = [];
						permission.types.forEach(function(type) {
							if(type.value != undefined) { // Si on détail les services
								if(type.allowed) {
									valuesAllowed.push(type.value);
								}
							} 
						});
						
						if(valuesAllowed.length > 0) {
							var data = generate(permission.base.toLowerCase(), valuesAllowed);
							logs.push(" " + data.data.length + " " + permission.base.toLowerCase() + " parmi " + valuesAllowed);
							generatedData.push(data);
						}
					}
					else if (permission.types[0].allowed) { //FIXME: Regarder chaque valeur des types
						var data = generate(permission.base.toLowerCase(), undefined);
						logs.push(" " + data.data.length + " " + permission.base.toLowerCase());
						generatedData.push(data);
					}					
				}
			});

			if(generatedData.length > 0) {
				// On envoi chaque donnée dans une requête vers le moteur séparement
				async.map(generatedData, httpPost, function (err, response, body){
					if (err) { 
						console.log(err); 
						if(res != undefined) { res.status(503).send(); }
					} else if(response == undefined) {
						if(res != undefined) { res.status(503).send('Service Unavailable'); }
					} else {
						if(res != undefined) { res.status(200).send(body); }
					}
				});
				console.log("[" + new Date().toLocaleDateString()+ " " + new Date().toLocaleTimeString() + "] Données envoyées au moteur :" + logs);
			}
        }
    });
};

/**
 * Envoi des données au moteur
 */
function httpPost(data, callback) {
  // TODO: HTTPS
  request({
        method: 'POST',
        uri: 'http://' + config.engine.url + ':' + config.engine.port + '/cozydata',
        json: data
    }, function(err, res, body) {
        callback(err, res, body);
    }
  );
}


/**
 * Retourne une données de type spécifié
 * @param {*} type 
 */
function generate(type, valuesAllowed) { 
    var generatedData;
    switch (type) {
        case 'bill': generatedData = generateBills(valuesAllowed); break; 
        case 'mood': generatedData = generateMoods(); break; 
        case 'consuptionstatement': generatedData = generateConsuptionstatement(); break;   
        default: return generatedData = undefined; break;
    }
    //var logins = ctrl_signature.getLogins();
    var data = {
        //cozyid: logins.cozyid,
        cozyid: config.cozyid,
        //signature: logins.signature,
        field: type,
        data: generatedData
    };
    return data;
}

/// Générateurs de données 
/**
 * Basé sur le modèle facture de My Accounts
 */
function generateBills(valuesAllowed) { 
    var bills = [];  	
    var types = { 
        "Orange" : "phone", 
        "Materiel.net" : "NA",
        "Sfr mobile" : "Mobile",
        "Sosh" : "phone",
        "Free" : "",
        "Free Mobile" : "phone",
        "Bouygues Box" : "",
        "Darty" : "shop",
        "Ameli" : "health",
        "APRR" : "Peage",
        "Github": "",
        "Numericable" : "",
        "vente-privee.com" : "shop",
        "Virgin mobile" : "",
        "VOYAGES SNCF" : "transport"
    };
	
	var nbDonnee = hlp_random.int(1, 11);
	if(valuesAllowed == 0) { return bills; }
	else if(valuesAllowed < types.length) { nbDonnee = hlp_random.int(1, Math.round(valuesAllowed.length / 2)); }
	
    for (var k=0; k<nbDonnee; k++) {			
        var vendor = valuesAllowed[hlp_random.int(0, valuesAllowed.length)];
		var amountType = hlp_random.int(0, 3);
		var amount = hlp_random.float(5, 150, 2);
		if(amountType == 2) {
			amount = hlp_random.float(100, 530, 2);
		}
        var bill = {};
        bill.vendor = vendor;
        bill.type = types[vendor],					
        bill.amount = amount;
        bill.time = hlp_random.timestamp(1470002400000);
        bills.push(bill);
    } 
    return bills;
}

/**
 * Basé sur Mood (Kyou)
 */
function generateMoods() { 
    var moods = [];  
    var nbDonnee = hlp_random.int(1, 10);
    var types = ["bad", "neutral", "good"];

    for (var k=0; k<nbDonnee; k++) {			
        var mood = {};
        mood.status = types[hlp_random.int(0, types.length)];
        mood.date = hlp_random.timestamp(1470002400000).toISOString().substring(0, 10) + "T00:00:00.000Z",					
        moods.push(mood);
    } 
    return moods;
}

/**
 * Basé sur Consumptionstatement (Rélévé de compteur du konnector EDF)
 */
function generateConsuptionstatement() { 
    var consumptions = [];  
    var nbDonnee = hlp_random.int(1, 12);

    function randomStatement() {
        var statement = {};
        switch (hlp_random.int(0, 5)) {
            case 0: 
                statement.type = "ESTIME"; 
                statement.category = "ESTIMATION_AUTO";
                statement.reason = "RELEVE_PERIODIQUE";
            break;
            default: 
                statement.type = "REEL";
                switch (hlp_random.int(0, 9)) {
                    case 0: case 1: case 2: 
                        statement.category = "RELEVE_CONFIANCE_ELEC";
                        statement.reason = "RELEVE_PERIODIQUE";
                    break;
                    case 3: 
                        statement.category = "RELEVE_REEL_Z1_POUR_FACTURATION_COMMUNE";
                        statement.reason = "RELEVE_INTERMEDIAIRE_CALC_FACT";
                    break;
                    default:
                        statement.category = "RELEVE_REEL_PAR_ERD_GRD";
                        switch (hlp_random.int(0, 2)) {
                            case 0: statement.reason = "RELEVE_INTERMEDIAIRE"; break;
                            default: statement.reason = "RELEVE_PERIODIQUE"; break;
                        }
                    break;
                }
            break;
        }
        return statement;
    }

    for (var k=0; k<nbDonnee; k++) {
        var period = hlp_random.timestamp(1470002400000);		
        var statement = randomStatement();	
        var consumption = {};
        consumption.start = period.toISOString().substring(0, 10);
        period.setMonth(period.getMonth()+1);
        consumption.end = period.toISOString().substring(0, 10);	
        consumption.value = hlp_random.int(30, 500);
        consumption.statementType = statement.type;
        consumption.statementCategory = statement.category;
        consumption.statementReason = statement.reason;
        consumptions.push(consumption);
    } 
    return consumptions;
}