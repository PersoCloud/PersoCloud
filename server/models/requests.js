// Pour récupérer des données depuis CouchDB

/*var cozydb = require('cozydb');

module.exports = { 
    bill: { 
        all: cozydb.defaultRequests.all,
        byDate: cozydb.defaultRequests.by('date'),
        groupByTime: {
            reduce: function(keys, values, rereduce) {
                if (rereduce) {
                    return {
                        'sum': values.reduce(function(a, b) { return a + b.sum }, 0),
                        'min': values.reduce(function(a, b) { return Math.min(a, b.min) }, Infinity),
                        'max': values.reduce(function(a, b) { return Math.max(a, b.max) }, -Infinity),
                        'count': values.reduce(function(a, b) { return a + b.count }, 0),
                        'sumsqr': values.reduce(function(a, b) { return a + b.sumsqr }, 0)
                    }
                } else {
                    return {
                        'sum': sum(values),
                        'min': Math.min.apply(null, values),
                        'max': Math.max.apply(null, values),
                        'count': values.length,
                        'sumsqr': (function() {
                        var sumsqr = 0;

                        values.forEach(function (value) {
                            sumsqr += value * value;
                        });

                        return sumsqr;
                        })(),
                    }
                }
            },
            map: function(doc) {
                if (doc.docType.toLowerCase() === "bill") {
                    var year = doc.date[0] + doc.date[1] + doc.date[2] + doc.date[3];
                    var month = doc.date[5] + doc.date[6];
                    var day = doc.date[8] + doc.date[9];
                    emit(year + "-" + month, doc.amount);
                }
            }
        }
    }
};*/