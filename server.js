///
///           PersoCloud - server.js      
///
/// Point d'entrée de l'API serveur de PersoCloud

var config = require('./config');
var express = require('express');
var app = express();                              
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var morgan = require('morgan');  // Module permettant d'afficher les logs de connexion dans la console serveur
var cozydb = require('cozydb');

// Configuration
app.use(express.static(__dirname + '/client/dist')); // set the static files location

app.use(morgan('dev')) // Remplacer dev par common pour afficher des logs comme pour Apache
app.use(bodyParser.json()); // parse application/json
app.use(methodOverride());

if(config.cozyid == "InsererLeCozyID") {
	console.error("Erreur : Insérer un CozyId dans le fichier config.js.\nPenser à envoyer des données vers le moteur en allant sur http://localhost:9104/apps/persocloud/api/senddata");
	return;		
}

// Lancement du serveur
var routes = require('./server/routes'); // Chargement des routes de l'API
cozydb.configure(__dirname, null, function() {
	app.use(config.server.path, routes);
	var server = app.listen(config.server.port, function () {
		var host = server.address().address;
		var port = server.address().port;
		console.log("App PersoCloud listening on http://localhost:9104/apps/persocloud/ and http://localhost:" + port+"/");
	});
})

