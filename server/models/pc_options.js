var cozydb = require('cozydb');

const pc_options = cozydb.getModel('pc_options', {
    'birthdate': Date,
    'gender': String,
    'country': String,
    'zip_code': String,
    'city': String,
    'location': {
		default: null,
        type: {
			latitude: String,
			longitude: String			
		}
    },    
    'sharing_permissions': {
        default: null,
        type: Array
    }
});

module.exports = pc_options;

