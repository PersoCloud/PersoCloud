///
///           PersoCloud - routes.js      
///
/// Indique les routes disponibles pour l'API serveur
/// Inspiré de http://expressjs.com/fr/guide/routing.html

var config = require('../config');
var express = require('express');
var router = express.Router();

var ctrl_analyze = require("./controllers/analyze");
var ctrl_options = require("./controllers/options");
var ctrl_senddata = require("./controllers/sendRandomData");

// Options de l'utilisateur
router.get('/options', function(req, res, next) {
	ctrl_options.get(req, res, next);	
});

router.post('/options', function(req, res, next) {
	ctrl_options.set(req, res, next);	
});


// Analyse
router.get('/analyze', function(req, res, next) {
	ctrl_analyze.analyze(req, res, next);
});

// Envoi des données au moteur
// TODO: Mettre post pour la mise en production
router.all('/senddata', function(req, res, next) {
	ctrl_senddata.send(req, res, next);
});

module.exports = router;