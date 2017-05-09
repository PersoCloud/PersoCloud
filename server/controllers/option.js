var http = require('http');
var express = require('express');
var app = express();
var cozydb = require('cozydb');
var requestJson = require('request-json');

var hlp_date = require('../helpers/date');
var model;

function defaultOption(optionName) {
	if(optionName == 'profile') {
		return {
			'birthdate': null,
			'gender': null,
			'country': null,
			'zip_code': null,
			'city': null
		};
	} else {
		return [
			{
				label: "Humeur",
				base: "Mood",
				key: undefined,
				types: [{
					key: "mood",
					label: "Humeur",
					value: undefined,
					allowed: false
				}]
			},
			{
				label: "Consommation",
				base: "Consuptionstatement",
				key: undefined,
				types: [{
						key: "edf",
						label: "EDF",
						value: undefined,
						allowed: false
					},
					{
						key: "direct_energie",
						label: "Direct Énergie",
						value: undefined,
						allowed: false
					}
				]
			},
			{
				label: "Factures",
				base: "Bill",
				key: "vendor",
				types: [{
						key: "numericable",
						label: "Numericable",
						value: "Numericable",
						allowed: false
					}, {
						key: "free_mobile",
						label: "Free Mobile",
						value: "Free Mobile",
						allowed: false
					}, {
						key: "voyages_sncf",
						label: "Voyages SNCF",
						value: "VOYAGES SNCF",
						allowed: false
					}, {
						key: "materiel_net",
						label: "Materiel.net",
						value: "Materiel.net",
						allowed: false
					}, {
						key: "bouygues_box",
						label: "Bouygues Box",
						value: "Bouygues Box",
						allowed: false
					}, {
						key: "sfr_mobile",
						label: "Sfr mobile",
						value: "Sfr mobile",
						allowed: false
					}, {
						key: "aprr",
						label: "APRR",
						value: "APRR",
						allowed: false
					}, {
						key: "vente-privee_com",
						label: "Vente-privee.com",
						value: "vente-privee.com",
						allowed: false
					}, {
						key: "free",
						label: "Free",
						value: "Free",
						allowed: false
					}, {
						key: "sosh",
						label: "Sosh",
						value: "Sosh",
						allowed: false
					}, {
						key: "ameli",
						label: "Ameli",
						value: "Ameli",
						allowed: false
					}, {
						key: "darty",
						label: "Darty",
						value: "Darty",
						allowed: false
					}, {
						key: "Orange",
						label: "Orange",
						value: "Orange",
						allowed: false
					}, {
						key: "virgin_mobile",
						label: "Virgin mobile",
						value: "Virgin mobile",
						allowed: false
					}, {
						key: "github",
						label: "Github",
						value: "Github",
						allowed: false
					}
				]
			},
			{
				label: "Données bancaires",
				base: undefined,
				key: undefined,
				types: [{
					key: "caisse_d_epargne",
					label: "Caisse d'Epargne",
					value: undefined,
					allowed: false
				}, {
					key: "credit_agricole",
					label: "Crédit Agricole",
					value: undefined,
					allowed: false
				}, {
					key: "credit_mutuel",
					label: "Crédit Mutuel",
					value: undefined,
					allowed: false
				}, {
					key: "lcl",
					label: "LCL",
					value: undefined,
					allowed: false
				}]
			}
		];
	}
}

exports.get = function get(optionName, req, res, next) {
	model = require('../models/pc_'+ optionName +'.js');
	
    getOption(function(option) { // On récupère l'option
        if(option == undefined || option.length == 0) {
            option = defaultOption(optionName);
        } 

		if(option.length > 1) {
			option.forEach(function(opt) {
				opt.id = undefined;
			});
		} 
		else {
			if(option.length == 1) {
				option = option[0];
			}
			if(option.id != undefined) {
				option.id = undefined;
			}
		}
		
		if(optionName == "sharing_permissions") { // FIXME: Tri
			var sorted_permissions = [];
			sorted_permissions.push(option[getIndexOfPermission("Humeur", option)]);
			sorted_permissions.push(option[getIndexOfPermission("Consommation", option)]);
			sorted_permissions.push(option[getIndexOfPermission("Factures", option)]);			
			sorted_permissions.push(option[getIndexOfPermission("Données bancaires", option)]);
			option = sorted_permissions;
		}
		res.status(200).json(option);
    });
};

function getIndexOfPermission(section, options) {
	var idx = 0;
	while(idx < options.length) {
		if(options[idx].label.toLowerCase() == section.toLowerCase()) {
			return idx;
		}
		idx++;
	}	
	return -1;
}

exports.set = function set(optionName, req, res, next) {
    if(isEmpty(req.body)) {
        res.status(401).send();
        return;
    }
	
	model = require('../models/pc_'+ optionName +'.js');

    getOption(function(option) {  // On regarde si des valeurs d'option existe déjà   
        if(option == undefined || option.length == 0) { // S'il n'en existe pas	
            setOption(req.body, res); // On sauvegarde l'option
        }
        else { 
            deleteOption(option, function(success) { // Sinon on détruit l'option déjà enregistrées
                if(!success) {
                    res.status(500).send();
                } else {
                    setOption(req.body, res); // Et au sauvegarde la nouvelle option
                }
            });           
        }
    });
};

/**
 * Récupèrer les valeurs de l'option
 * @param {JSON} Callback
 */
function getOption(cb) {
    model.all(function (err, results) {		
        if(err != undefined) {
            console.error(err);
			cb(undefined);
        } else {	
			results.forEach(function(result) {
				result._id = undefined;		
				result.docType = undefined;	
			});				
            cb(results);
        }
    });
};

/**
 * Enregistre les valeurs des options
 * @param {*} option Object(s) JSON
 * @param {*} res Response Express
 */
function setOption(option, res) {
	if(option.length > 1) {
		var success = true;
		option.forEach(function(opt) {			
			model.create(opt, function (err, modelCreated) {
				if(err != undefined) {
					console.error(err);
					success = false;
				}	
			});
		});
		
		if(success) {
			res.status(200).json({'success':success});
		} else {
			res.status(500).send();
		}
	} else {
		
		option.docType = "test_profile";
		console.log(option);
		model.create(option, function (err, modelCreated) {
			if(err != undefined) {
				console.error(err);
				res.status(500).send();
			} else {		
				res.status(200).json({'success':true});
			}
		});
	}
};

function deleteOption(option, cb) {
	var success = true;
	option.forEach(function(opt) {
		model.destroy(opt.id, function(err) {
			if(err) {
				console.error(err);
				success = false;
			}	
		});
	});		
	cb(success);
}

function isEmpty(map) {   
   return Object.keys(map).length == 0;
}