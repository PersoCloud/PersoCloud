// Pour récupérer des données depuis CouchDB
var cozydb = require('cozydb');

module.exports = { 
    pc_profile: { 
        all: cozydb.defaultRequests.all        
    },
	pc_sharing_permissions: { 
        all: cozydb.defaultRequests.all        
    },
	pc_logins: { 
        all: cozydb.defaultRequests.all        
    }
};