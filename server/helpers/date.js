/***
 * Extrait et retourne un tableau avec les dates de départ et de fin d'une période
 * @param period String au format 'date1;date2'
 * @return Object avec les attributs start et end. undefined si @period n'est pas dans un format valide
 */
exports.extractPeriod = function(periodString) {
    var period = undefined;
    if(periodString != undefined && periodString != "") {
        var dates = periodString.split(";");
        if(dates != undefined && dates.length == 2) {
            /* TODO: Tester si dates valides (dates[0] <= dates[1] et format 2015-01-01T00:00:00.000Z ou 2015-01-01*/
            period = {
                start: dates[0],
                end: dates[1]
            };
        }
        else {
            return false;
        }
    }
    return period;
};