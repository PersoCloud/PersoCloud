var http = require('http');
var express = require('express');
var app = express();
var cozydb = require('cozydb');
var requestJson = require('request-json');

var hlp_date = require('../helpers/date');
var Model = require('../models/pc_options.js');

/**
 * TODO: Améliorer la gestion des requêtes.
 * Ne prend en compte que les requêtes "application/x-www-form-urlencoded"
 * Exemple : birthdate=2017-01-02&city=Rennes&country=France
 * 
 * TODO: Permettre la mise à jour des options,au lieu de leur suppression puis re-création
 */
exports.get = function get(req, res, next) {	
    getOptions(function(option) { // On récupère les options
        if(option == undefined) {
            res.status(404).send();
        } else {			
			res.status(200).json(option);
        }
    });
};

exports.set = function set(req, res, next) {
    if(isEmpty(req.body)) {
         res.status(401).send();
         return;
    }

    getOptions(function(option) {  // On regarde si des valeurs d'option existe déjà      
        if(option == undefined) { // S'il n'en existe pas
			setOptions(req.body, res); // On sauvegarde les options
        }
        else { 
            Model.destroy(option.id, function(err) { // Sinon on détruit les options déjà enregistrées
                if(err) {
                    console.error(err);
                    res.status(500).send();
                } else {
                    setOptions(req.body, res); // Et au sauvegarde les nouvelles options
                }
            });           
        }
    });
};

/**
 * Récupèrer les valeurs des options
 * @param {JSON} Callback
 */
function getOptions(cb) {
    Model.all(function (err, results) {		
        if(err != undefined) {
            console.error(err);
			cb(undefined);
        } else if(results == undefined || results.length != 1) {
            cb(undefined);
        } else {
            cb(results[0]);
        }
    });
};

/**
 * Enregistre les valeurs des options
 * @param {*} option Object JSON avec les clés-valeurs des options
 * @param {*} res Response Express
 */
function setOptions(option, res) {
    Model.create(option, function (err, modelCreated) {
        if(err != undefined) {
            console.error(err);
            res.status(500).send();
        } else {		
            res.status(200).send();
        }
    });
};

function isEmpty(map) {
   for(var key in map) {
      return !map.hasOwnProperty(key);
   }
   return true;
}