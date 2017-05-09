var cozydb = require('cozydb');

const pc_logins = cozydb.getModel('pc_logins', {
    "cozyid": String,
    "signature": String
});

module.exports = pc_logins;
