/**
 * Générer un nombre entier dans l'intervalle [low, high[
 * @param {int} low 
 * @param {int} high 
 */
exports.int = function (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
};

exports.float = function (low, high, nbDecimal) {
    return Number((Math.random() * (high - low) + low).toFixed(nbDecimal));
};

/**
 * Générer une chaine de caractère aléatoire (A-Za-z0-9)
 * @param {int} length Taille de la chaine de caractère
 */
exports.string = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

/**
 * Générer un timestamp aléatoire entre [start, end[
 * @param {timestamp} start 
 * @param {timestamp} end ou null si on veut utiliser Date.Now
 */
exports.timestamp = function(start, end) { 
    if(end == undefined) {
        end = new Date();
    }
    return new Date(Math.random() * (end - start) + start); 
};