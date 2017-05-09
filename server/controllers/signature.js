var config = require('../../config');
var express = require('express');
var app = express();
var cozydb = require('cozydb');
var request = require('request');
var ModelLogins = require('../models/pc_logins');

exports.getLogins = function(callback) {
  existsLogins(function(logins_couchdb) {
      if(logins_couchdb == undefined) {
         request({
            method: 'GET',
            uri: 'http://' + config.engine.url + ':' + config.engine.port + '/cozydata/register'
        }, function(err, res, logins) {
                if(res.statusCode == 200) {
                    console.log(logins);
                    ModelLogins.create(logins, function (err, modelCreated) {
                        console.error("Logins error : " + err);
                        console.log(modelCreated);
                        if(err != undefined) {
                            
                        } else {		
                            console.info("Logins saved : " + logins);
                        }
                        callback(logins);
                    });
                }
                else {
                    callback(undefined);
                }
            });
        } 
        else {
            callback(logins_couchdb);
        }
    }); 
};

function existsLogins(cb) {
    ModelLogins.all(function (err, results) {
        if(err != undefined) {
			cb(undefined);
        } else if(results.length == 1) {
            cb(results[0]);
        } else {
            cb(undefined);
        }
    });
};