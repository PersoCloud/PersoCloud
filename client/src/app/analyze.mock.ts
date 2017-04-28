import { AnalyzeModel } from './analyze.models';

/**
 * Génération aléatoire des données retournées par l'API serveur
 */
export const DONNEES = function() : AnalyzeModel {   
    var engine_max, engine_min, engine_sum, cozy_max, cozy_min, cozy_sum = null;
    var engine_values = [];
    var cozy_values = [];
    var cozyData = [];
    var engineData = [];

    // Génération des données moteur
    var i_max = getRandomInt(1, 400);
    for (var _i = 0; _i < i_max; _i++) {
        var data = generateData();
        engineData.push(data);        

        // Pré-calculs des métadonnées
        engine_values.push(data.amount);
        if(data.amount > engine_max) {
            engine_max = data.amount;
        }
        if(data.amount < engine_min) {
            engine_min = data.amount;
        }
        engine_sum += data.amount;
    }

    // Génération des données cozy
    var i_max = getRandomInt(1, 15);
    for (var _i = 0; _i < i_max; _i++) {
        var data = generateData();
        cozyData.push(data);        

        // Pré-calculs des métadonnées
        cozy_values.push(data.amount);
        if(data.amount > cozy_max) {
            cozy_max = data.amount;
        }
        if(data.amount < cozy_min) {
            cozy_min = data.amount;
        }
        cozy_sum += data.amount;       
    }

    // Formatage des données
    let model = new AnalyzeModel();
    model.cozy = {
        data: cozyData, 
        meta: {
            count: cozyData.length,
            first: cozyData[0].amount,
			last: cozyData[cozyData.length-1].amount,
			max: cozy_max,
			mean: cozy_sum / cozyData.length,
			median: median(cozy_values),
			min: cozy_min,
			stddev: standardDeviation(cozy_values),
			sum: cozy_sum
        }
    };
    model.engine = {
        data: engineData, 
        meta: {
            count: engineData.length,
            first: engineData[0].amount,
			last: engineData[engineData.length-1].amount,
			max: engine_max,
			mean: engine_sum / engineData.length,
			median: median(engine_values),
			min: engine_min,
			stddev: standardDeviation(engine_values),
			sum: engine_sum
        }
    };
    return model;
} 


function generateData() {
    var types = { "Orange" : "phone", "Materiel.net" : "NA", "EDF": "Electricity" };
    var vendor = randomVendor();
    var amount = randomFloat(1, 201, 2);
    var data = {
        time: timestampToDate(getRandomInt(1477954800, 1489935748)),
        type: types[vendor],
        amount: amount,
        vendor: vendor
    }
    return data;
}

function median(values) {
    values.sort( function(a,b) {return a - b;} );
    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}


function standardDeviation(values){
  var avg = average(values);
  
  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}

function randomVendor() {
    switch (getRandomInt(0, 2)) {
        case 0: return "Orange";
        case 1: return "Materiel.net";
        default: return "EDF";
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(low, high, nbDecimal) {
    return Number((Math.random() * (high - low) + low).toFixed(nbDecimal));
};

function timestampToDate(timestamp) {
  var date = new Date(timestamp*1000);
  return date.toISOString();
}