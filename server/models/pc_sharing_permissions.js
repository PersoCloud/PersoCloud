var cozydb = require('cozydb');

const pc_sharing_permissions = cozydb.getModel('pc_sharing_permissions', {
    'label': String,
	'base': String,
	'key': String,
	'types': [ Object ]
});

/*	'types': [ {
		'key': String,
		'label': String, 
		'value': String, 
		'allowed': Boolean
	} ] */

module.exports = pc_sharing_permissions;