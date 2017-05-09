///
///           PersoCloud - routes.js      
///
/// Indique les routes disponibles pour l'API serveur
/// Inspiré de http://expressjs.com/fr/guide/routing.html

var config = require('../config');
var express = require('express');
var router = express.Router();

var ctrl_analyze = require("./controllers/analyze");
var ctrl_option = require("./controllers/option");
var ctrl_signature = require("./controllers/signature");

// Profil de l'utilisateur
router.get('/profile', function(req, res, next) {
	ctrl_option.get('profile', req, res, next);	
});

router.post('/profile', function(req, res, next) {
	ctrl_option.set('profile', req, res, next);	
});

// Politique de partage de l'utilisateur
router.get('/sharing_permissions', function(req, res, next) {
	ctrl_option.get('sharing_permissions', req, res, next);	
});

router.post('/sharing_permissions', function(req, res, next) {
	ctrl_option.set('sharing_permissions', req, res, next);	
});

// Analyse
router.get('/analyze', function(req, res, next) {
	ctrl_analyze.analyze(req, res, next);
});

/*router.get('/testSignature', function(req, res, next) {
	ctrl_signature.engineRegister(req, res, next);
	/*ctrl_signature.getLogins(function(r) {
		res.status(200).send(r);
	});*/	
//});

module.exports = router;