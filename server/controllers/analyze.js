var config = require('../../config');
var requestJson = require('request-json');
var hlp_date = require('../helpers/date');

exports.analyze = function (req, res, next) {	
	if(req.query.field == undefined) {
		res.status(400).send('No field specified');
        return;
	}
	var field = req.query.field.toLowerCase();
	var metakey = undefined;
    if (req.query.metakey != undefined) {
        metakey = req.query.metakey.toLowerCase();
    }
	
	// Création d'un objet représentant la période
    var period = hlp_date.extractPeriod(req.query.period);
    if (period == false) {
        res.status(400).send('Invalid period');
        return;
    }	

	// Groupby
	var group = req.query.group;
						
	// Connexion au moteur
	var clientMoteur;
	/*if(config.engine.https) {
		clientMoteur = // TODO HTTPS
	} else {*/
		clientMoteur = requestJson.createClient("http://" + config.engine.url + ":" + config.engine.port);
	//}
	var enginePath = "analyze?cozyid=" + config.cozyid + "&field=" + field;
	if(metakey != undefined) {
		enginePath += "&metakey=" + metakey;
	}
	if(period != undefined) {
		enginePath += "&period=" + period.start + ";" + period.end;
	}
	if(group != undefined) {
		enginePath += "&group=" + group;
	}
	clientMoteur.get(enginePath, function(engineErr, engineRes, engineData) {				
		if(engineRes == undefined) {
			res.status(503).send("Service unavailable");
		}
		else {
			res.status(engineRes.statusCode).json(engineData);
		}
	});
};