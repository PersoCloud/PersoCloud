var cozydb = require('cozydb');

const pc_profile = cozydb.getModel('pc_profile', {
    'birthdate': Date,
    'gender': String,
    'country': String,
    'zip_code': String,
    'city': String
});

module.exports = pc_profile;