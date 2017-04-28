webpackJsonp([1,5],{

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    analyze_service: "http"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AideComponent = (function () {
    function AideComponent() {
    }
    AideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'aide',
            template: __webpack_require__(802)
        }), 
        __metadata('design:paramtypes', [])
    ], AideComponent);
    return AideComponent;
}());
//# sourceMappingURL=aide.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyzeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnalyzeOptions; });
var AnalyzeModel = (function () {
    function AnalyzeModel() {
    }
    return AnalyzeModel;
}());
;
var AnalyzeOptions = (function () {
    function AnalyzeOptions() {
    }
    return AnalyzeOptions;
}());
;
//# sourceMappingURL=analyze.models.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analyze_mock__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyzeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnalyzeService = (function () {
    function AnalyzeService(http) {
        this.http = http;
    }
    AnalyzeService.prototype.getApiPath = function (options) {
        var path = "/apps/persocloud/api/analyze?field=" + options.field;
        if (options.metakey != undefined) {
            path += "&metakey=" + options.metakey;
        }
        if (options.period != undefined) {
            path += "&period=" + moment(options.period.start, 'X').toISOString() + ";" + moment(options.period.end, 'X').toISOString();
        }
        if (options.group != undefined) {
            path += "&group=" + options.group;
        }
        console.log("Demande à l'API serveur : http://localhost:9104" + path);
        return path;
    };
    AnalyzeService.prototype.getAnalyze = function (options) {
        if (this.previousOptions == options) {
            return this.previousResults;
        }
        this.previousOptions = options;
        if (options.metakey == undefined && options.group == undefined) {
            options.metakey = "value";
        }
        else if (options.metakey == undefined && options.group != undefined) {
            options.metakey = options.group;
        }
        // Si l'application a été compilé pour utilisé l'API moteur (http service)
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].analyze_service == "http") {
            var results = this.http.get(this.getApiPath(options))
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
            this.previousResults = results;
            return results;
        }
        else {
            return Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__analyze_mock__["a" /* DONNEES */])());
        }
    };
    AnalyzeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AnalyzeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AnalyzeService);
    return AnalyzeService;
    var _a;
}());
//# sourceMappingURL=analyze.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analyze_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analyze_availableData__ = __webpack_require__(685);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonneesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonneesComponent = (function () {
    function DonneesComponent(AnalyzeService) {
        this.AnalyzeService = AnalyzeService;
        this.availableFields = __WEBPACK_IMPORTED_MODULE_2__analyze_availableData__["a" /* AvailableData */].fields;
        this.availableMetaKeys = __WEBPACK_IMPORTED_MODULE_2__analyze_availableData__["a" /* AvailableData */].metakeyKeys;
        this.availableGroupKeys = __WEBPACK_IMPORTED_MODULE_2__analyze_availableData__["a" /* AvailableData */].groupKeys;
        this.groupTimeValue = 1;
        this.groupTimeDuration = 'w';
        this.btnAnalyzeDisabled = false;
        this.btnAnalyzeValue = "Lancer l'analyse";
        this.serviceError = undefined;
    }
    DonneesComponent.prototype.ngOnInit = function () {
        var defaultField = this.availableFields[0].items[0].field;
        this.analyzeOptions = {
            field: defaultField,
            metakey: this.availableMetaKeys[defaultField][0].key,
            group: "time",
            period: {
                start: moment().subtract(1, "months").format("X"),
                end: moment().format("X")
            }
        };
    };
    DonneesComponent.prototype.periodFinish = function (slider) {
        this.analyzeOptions = {
            field: this.analyzeOptions.field,
            metakey: this.analyzeOptions.metakey,
            group: this.analyzeOptions.group,
            period: {
                start: slider.from,
                end: slider.to
            }
        };
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.fieldChange = function (item) {
        this.analyzeOptions = {
            field: item,
            metakey: this.availableMetaKeys[item][0].key,
            group: "time",
            period: this.analyzeOptions.period
        };
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.metakeyChange = function (item) {
        this.analyzeOptions = {
            field: this.analyzeOptions.field,
            metakey: item,
            group: this.analyzeOptions.group,
            period: this.analyzeOptions.period
        };
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.groupChange = function (item) {
        this.analyzeOptions = {
            field: this.analyzeOptions.field,
            metakey: this.analyzeOptions.metakey,
            group: item == "" ? undefined : item,
            period: this.analyzeOptions.period
        };
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.groupTimeValueChange = function (item) {
        this.groupTimeValue = item;
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.groupTimeDurationChange = function (item) {
        this.groupTimeDuration = item;
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.activeBtnAnalyze = function () {
        this.btnAnalyzeDisabled = false;
        this.btnAnalyzeValue = "Lancer l'analyse";
        this.btnAnalyzeDescription = "";
    };
    DonneesComponent.prototype.getAnalyze = function () {
        var _this = this;
        this.serviceError = undefined;
        if (this.analyzeOptions.field != undefined) {
            this.btnAnalyzeDisabled = true;
            this.btnAnalyzeValue = "Analyse en cours...";
            var options = this.analyzeOptions;
            if (options.group == 'time') {
                var group = "time(" + this.groupTimeValue + this.groupTimeDuration + ")";
                if (this.groupTimeDuration == 'y') {
                    var group = "time(" + (this.groupTimeValue * 52) + "w)";
                }
                options = {
                    field: this.analyzeOptions.field,
                    metakey: this.analyzeOptions.metakey,
                    group: group,
                    period: this.analyzeOptions.period
                };
            }
            this.AnalyzeService.getAnalyze(options)
                .then(function (results) {
                _this.analyzeResults = results;
                _this.btnAnalyzeDisabled = true;
                _this.btnAnalyzeValue = "Lancer l'analyse";
                _this.btnAnalyzeDescription = "Modifier les paramètres de l'analyse avant d'en relancer une";
            })
                .catch(function (e) {
                _this.serviceError = "Erreur " + e.status + " : " + e.statusText;
                _this.activeBtnAnalyze();
            });
        }
    };
    DonneesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery("#period_slider").ionRangeSlider({
            type: "double",
            min: moment().subtract(1, "years").format("X"),
            max: moment().format("X"),
            from: moment().subtract(1, "months").format("X"),
            grid: true,
            grid_num: 6,
            step: 3600,
            min_interval: 1,
            keyboard: true,
            keyboard_step: 0.5,
            force_edges: true,
            prettify: function (num) {
                return moment(num, "X").locale("fr").format("DD/MM/YYYY HH:mm");
            },
            onFinish: function (slider) {
                _this.periodFinish(slider);
            }
        });
    };
    DonneesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'donnees',
            template: __webpack_require__(810),
            providers: [__WEBPACK_IMPORTED_MODULE_1__analyze_service__["a" /* AnalyzeService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__analyze_service__["a" /* AnalyzeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__analyze_service__["a" /* AnalyzeService */]) === 'function' && _a) || Object])
    ], DonneesComponent);
    return DonneesComponent;
    var _a;
}());
//# sourceMappingURL=donnees.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartageComponent = (function () {
    function PartageComponent() {
        this.levelDescription = "Aucune donnée ne sera envoyée au serveur PersoCloud. Vous ne pourrez donc pas les comparer à celles des autres utilisateurs de PersoCloud.";
    }
    /*checkboxDisabled:boolean = true;
    checkboxes: Object = [{label: 'Numericable', chosen: false},{label: 'two', chosen: true}];*/
    PartageComponent.prototype.changeLevel = function (slider) {
        switch (slider.from) {
            case 0:
                this.levelDescription = "Aucune donnée ne sera envoyée au serveur PersoCloud. Vous ne pourrez donc pas les comparer à celles des autres utilisateurs de PersoCloud.";
                break;
            case 1:
                this.levelDescription = "Uniquement les données anodines seront envoyées au serveur PersoCloud comme votre humeur quotidienne.";
                break;
            case 2:
                this.levelDescription = "Vos données privées seront partagées avec les autres utilisateurs comme le montant de vos factures où votre consommation électrique.";
                break;
            case 3:
                this.levelDescription = "Vos données confidentielles seront utilisées pour les analyses statistiques de PersoCloud comme vos recettes et dépenses bancaires.";
                break;
            default:
                this.levelDescription = "Vous choisissez quel type de donnée vous partagez et depuis quelle source.";
                break;
        }
    };
    PartageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery("#level_slider").ionRangeSlider({
            type: "single",
            values: [
                "Aucun partage", "Minimun", "Moyen", "Important", "Personnalisé"
            ],
            from: 0,
            grid: true,
            force_edges: true,
            onChange: function (slider) {
                _this.changeLevel(slider);
            },
            onStart: function (slider) {
                _this.changeLevel(slider);
            }
        });
        jQuery('input').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
        });
    };
    PartageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'partage',
            template: __webpack_require__(812)
        }), 
        __metadata('design:paramtypes', [])
    ], PartageComponent);
    return PartageComponent;
}());
//# sourceMappingURL=partage.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilComponent = (function () {
    function ProfilComponent() {
        this.radioGendor = 'unspecified';
    }
    ProfilComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profil',
            template: __webpack_require__(813)
        }), 
        __metadata('design:paramtypes', [])
    ], ProfilComponent);
    return ProfilComponent;
}());
//# sourceMappingURL=profil.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 555;


/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(205);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableData; });
var AvailableData = (function () {
    function AvailableData() {
    }
    AvailableData.fields = [{
            groupLabel: "Finance",
            items: [{
                    field: "Bill",
                    label: "Facture"
                }]
        },
        {
            groupLabel: "Energie",
            items: [{
                    field: "Consuptionstatement",
                    label: "Consommation électrique (EDF)"
                }]
        },
        {
            groupLabel: "Santé",
            items: [{
                    field: "Mood",
                    label: "Humeur"
                }]
        }];
    AvailableData.groupKeys = {
        Bill: [{
                key: "vendor",
                label: "Vendeur"
            },
            {
                key: "type",
                label: "Type"
            }],
        Consuptionstatement: [{
                key: "statementCategory",
                label: "Catégorie"
            },
            {
                key: "statementReason",
                label: "Raison du relevé"
            },
            {
                key: "statementType",
                label: "Type de relevé"
            }],
        Mood: []
    };
    AvailableData.metakeyKeys = {
        Bill: [{
                key: "amount",
                label: "Montant"
            }],
        Consuptionstatement: [{
                key: "value",
                label: "Montant"
            }],
        Mood: [{
                key: "value",
                label: "Humeur"
            }]
    };
    return AvailableData;
}());
//# sourceMappingURL=analyze.availableData.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analyze_models__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DONNEES; });

/**
 * Génération aléatoire des données retournées par l'API serveur
 */
var DONNEES = function () {
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
        if (data.amount > engine_max) {
            engine_max = data.amount;
        }
        if (data.amount < engine_min) {
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
        if (data.amount > cozy_max) {
            cozy_max = data.amount;
        }
        if (data.amount < cozy_min) {
            cozy_min = data.amount;
        }
        cozy_sum += data.amount;
    }
    // Formatage des données
    var model = new __WEBPACK_IMPORTED_MODULE_0__analyze_models__["a" /* AnalyzeModel */]();
    model.cozy = {
        data: cozyData,
        meta: {
            count: cozyData.length,
            first: cozyData[0].amount,
            last: cozyData[cozyData.length - 1].amount,
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
            last: engineData[engineData.length - 1].amount,
            max: engine_max,
            mean: engine_sum / engineData.length,
            median: median(engine_values),
            min: engine_min,
            stddev: standardDeviation(engine_values),
            sum: engine_sum
        }
    };
    return model;
};
function generateData() {
    var types = { "Orange": "phone", "Materiel.net": "NA", "EDF": "Electricity" };
    var vendor = randomVendor();
    var amount = randomFloat(1, 201, 2);
    var data = {
        time: timestampToDate(getRandomInt(1477954800, 1489935748)),
        type: types[vendor],
        amount: amount,
        vendor: vendor
    };
    return data;
}
function median(values) {
    values.sort(function (a, b) { return a - b; });
    var half = Math.floor(values.length / 2);
    if (values.length % 2)
        return values[half];
    else
        return (values[half - 1] + values[half]) / 2.0;
}
function standardDeviation(values) {
    var avg = average(values);
    var squareDiffs = values.map(function (value) {
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
    });
    var avgSquareDiff = average(squareDiffs);
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}
function average(data) {
    var sum = data.reduce(function (sum, value) {
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
}
;
function timestampToDate(timestamp) {
    var date = new Date(timestamp * 1000);
    return date.toISOString();
}
//# sourceMappingURL=analyze.mock.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donnees_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partage_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aide_component__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__donnees_component__["a" /* DonneesComponent */] },
    { path: 'partage', component: __WEBPACK_IMPORTED_MODULE_3__partage_component__["a" /* PartageComponent */] },
    { path: 'profil', component: __WEBPACK_IMPORTED_MODULE_4__profil_component__["a" /* ProfilComponent */] },
    { path: 'aide', component: __WEBPACK_IMPORTED_MODULE_5__aide_component__["a" /* AideComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.envAnalyzeService = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].analyze_service;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-persocloud',
            template: __webpack_require__(803),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__charts_pie_chart__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__charts_doughnut_chart__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__charts_polar_area_chart__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__charts_bar_chart__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__charts_line_chart__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__charts_radar_chart__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__donnees_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__donnees_traitement_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__analyze_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__aide_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__partage_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profil_component__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__aide_component__["a" /* AideComponent */],
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__donnees_component__["a" /* DonneesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__donnees_traitement_component__["a" /* DonneesTraitementComponent */],
                __WEBPACK_IMPORTED_MODULE_10__charts_pie_chart__["a" /* PieChartComponent */],
                __WEBPACK_IMPORTED_MODULE_11__charts_doughnut_chart__["a" /* DoughnutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_12__charts_polar_area_chart__["a" /* PolarAreaChartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__charts_bar_chart__["a" /* BarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_14__charts_line_chart__["a" /* LineChartComponent */],
                __WEBPACK_IMPORTED_MODULE_15__charts_radar_chart__["a" /* RadarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_21__partage_component__["a" /* PartageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__profil_component__["a" /* ProfilComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__["IonRangeSliderModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["c" /* TooltipModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__analyze_service__["a" /* AnalyzeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarChartComponent = (function () {
    function BarChartComponent() {
        this.barChartType = 'bar';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
    }
    /*Data syntax [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];*/
    // events
    BarChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    BarChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'), 
        __metadata('design:type', Array)
    ], BarChartComponent.prototype, "barChartLabels", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('valuesForChart'), 
        __metadata('design:type', Array)
    ], BarChartComponent.prototype, "barChartData", void 0);
    BarChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bar-chart',
            template: __webpack_require__(804)
        }), 
        __metadata('design:paramtypes', [])
    ], BarChartComponent);
    return BarChartComponent;
}());
//# sourceMappingURL=bar-chart.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoughnutChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoughnutChartComponent = (function () {
    function DoughnutChartComponent() {
        this.doughnutChartType = 'doughnut';
    }
    // events
    DoughnutChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DoughnutChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'), 
        __metadata('design:type', Array)
    ], DoughnutChartComponent.prototype, "doughnutChartLabels", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('valuesForChart'), 
        __metadata('design:type', Array)
    ], DoughnutChartComponent.prototype, "doughnutChartData", void 0);
    DoughnutChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'doughnut-chart',
            template: __webpack_require__(805)
        }), 
        __metadata('design:paramtypes', [])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());
//# sourceMappingURL=doughnut-chart.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineChartComponent = (function () {
    function LineChartComponent() {
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    LineChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    LineChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'), 
        __metadata('design:type', Array)
    ], LineChartComponent.prototype, "lineChartLabels", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('valuesForChart'), 
        __metadata('design:type', Array)
    ], LineChartComponent.prototype, "lineChartData", void 0);
    LineChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'line-chart',
            template: __webpack_require__(806)
        }), 
        __metadata('design:paramtypes', [])
    ], LineChartComponent);
    return LineChartComponent;
}());
//# sourceMappingURL=line-chart.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartComponent = (function () {
    function PieChartComponent() {
        this.pieChartType = 'pie';
    }
    // events
    PieChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PieChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'), 
        __metadata('design:type', Array)
    ], PieChartComponent.prototype, "pieChartLabels", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('valuesForChart'), 
        __metadata('design:type', Array)
    ], PieChartComponent.prototype, "pieChartData", void 0);
    PieChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pie-chart',
            template: __webpack_require__(807)
        }), 
        __metadata('design:paramtypes', [])
    ], PieChartComponent);
    return PieChartComponent;
}());
//# sourceMappingURL=pie-chart.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolarAreaChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolarAreaChartComponent = (function () {
    function PolarAreaChartComponent() {
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    PolarAreaChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PolarAreaChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'), 
        __metadata('design:type', Array)
    ], PolarAreaChartComponent.prototype, "polarAreaChartLabels", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('valuesForChart'), 
        __metadata('design:type', Array)
    ], PolarAreaChartComponent.prototype, "polarAreaChartData", void 0);
    PolarAreaChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'polar-area-chart',
            template: __webpack_require__(808)
        }), 
        __metadata('design:paramtypes', [])
    ], PolarAreaChartComponent);
    return PolarAreaChartComponent;
}());
//# sourceMappingURL=polar-area-chart.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadarChartComponent = (function () {
    function RadarChartComponent() {
        this.radarChartType = 'radar';
    }
    // events
    RadarChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    RadarChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('label'), 
        __metadata('design:type', Array)
    ], RadarChartComponent.prototype, "radarChartLabels", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('valuesForChart'), 
        __metadata('design:type', Array)
    ], RadarChartComponent.prototype, "radarChartData", void 0);
    RadarChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'radar-chart',
            template: __webpack_require__(809)
        }), 
        __metadata('design:paramtypes', [])
    ], RadarChartComponent);
    return RadarChartComponent;
}());
//# sourceMappingURL=radar-chart.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analyze_models__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonneesTraitementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonneesTraitementComponent = (function () {
    function DonneesTraitementComponent() {
    }
    DonneesTraitementComponent.prototype.aggregateChange = function (item) {
        this.aggregate = item;
        this.traiter();
    };
    DonneesTraitementComponent.prototype.traiter = function () {
        this.labels = [];
        this.valuesForChart = [];
        this.valuesForBarChart = [];
        var dataBarChart = [];
        var dataUser = [];
        var dataMoteur = [];
        var group = this.analyzeOptions.group;
        if (group.substr(0, 5) == "time(") {
            group = "time";
        }
        for (var i in this.donnees.cozy.data) {
            var item = this.donnees.cozy.data[i];
            console.log(item);
            dataUser.push(item[this.aggregate]);
            if (this.labels.indexOf(item[group]) === -1) {
                this.labels.push(item[group]);
                this.valuesForChart.push(item[this.aggregate]);
            }
        }
        ;
        dataBarChart[0] = { data: dataUser, label: 'Moi' };
        this.valuesForBarChart.push(dataBarChart[0]);
        for (var i in this.donnees.engine.data) {
            var item = this.donnees.engine.data[i];
            dataMoteur.push(item[this.aggregate]);
            if (this.labels.indexOf(item[group]) === -1) {
                this.labels.push(item[group]);
            }
        }
        ;
        dataBarChart[1] = { data: dataMoteur, label: 'Autres utilisateurs' };
        this.valuesForBarChart.push(dataBarChart[1]);
        //Start displaying in console
        /*console.log("Valeurs finales");
        console.log(this.labels);
        console.log(this.valuesForChart);
        console.log(this.valuesForBarChart);*/
    };
    DonneesTraitementComponent.prototype.ngOnChanges = function (donnees) {
        this.aggregate = "count";
        this.traiter();
    };
    DonneesTraitementComponent.prototype.ngOnInit = function () {
        this.typeChart = "doughnut";
        this.aggregate = "count";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__analyze_models__["a" /* AnalyzeModel */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__analyze_models__["a" /* AnalyzeModel */]) === 'function' && _a) || Object)
    ], DonneesTraitementComponent.prototype, "donnees", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__analyze_models__["b" /* AnalyzeOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__analyze_models__["b" /* AnalyzeOptions */]) === 'function' && _b) || Object)
    ], DonneesTraitementComponent.prototype, "analyzeOptions", void 0);
    DonneesTraitementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'donnees-traitement',
            template: __webpack_require__(811)
        }), 
        __metadata('design:paramtypes', [])
    ], DonneesTraitementComponent);
    return DonneesTraitementComponent;
    var _a, _b;
}());
//# sourceMappingURL=donnees.traitement.component.js.map

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "h1 {\r\n\tfont-family: Verdana, Arial, Serif;\r\n\tfont-size: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 366,
	"./af.js": 366,
	"./ar": 373,
	"./ar-dz": 367,
	"./ar-dz.js": 367,
	"./ar-kw": 368,
	"./ar-kw.js": 368,
	"./ar-ly": 369,
	"./ar-ly.js": 369,
	"./ar-ma": 370,
	"./ar-ma.js": 370,
	"./ar-sa": 371,
	"./ar-sa.js": 371,
	"./ar-tn": 372,
	"./ar-tn.js": 372,
	"./ar.js": 373,
	"./az": 374,
	"./az.js": 374,
	"./be": 375,
	"./be.js": 375,
	"./bg": 376,
	"./bg.js": 376,
	"./bn": 377,
	"./bn.js": 377,
	"./bo": 378,
	"./bo.js": 378,
	"./br": 379,
	"./br.js": 379,
	"./bs": 380,
	"./bs.js": 380,
	"./ca": 381,
	"./ca.js": 381,
	"./cs": 382,
	"./cs.js": 382,
	"./cv": 383,
	"./cv.js": 383,
	"./cy": 384,
	"./cy.js": 384,
	"./da": 385,
	"./da.js": 385,
	"./de": 388,
	"./de-at": 386,
	"./de-at.js": 386,
	"./de-ch": 387,
	"./de-ch.js": 387,
	"./de.js": 388,
	"./dv": 389,
	"./dv.js": 389,
	"./el": 390,
	"./el.js": 390,
	"./en-au": 391,
	"./en-au.js": 391,
	"./en-ca": 392,
	"./en-ca.js": 392,
	"./en-gb": 393,
	"./en-gb.js": 393,
	"./en-ie": 394,
	"./en-ie.js": 394,
	"./en-nz": 395,
	"./en-nz.js": 395,
	"./eo": 396,
	"./eo.js": 396,
	"./es": 398,
	"./es-do": 397,
	"./es-do.js": 397,
	"./es.js": 398,
	"./et": 399,
	"./et.js": 399,
	"./eu": 400,
	"./eu.js": 400,
	"./fa": 401,
	"./fa.js": 401,
	"./fi": 402,
	"./fi.js": 402,
	"./fo": 403,
	"./fo.js": 403,
	"./fr": 406,
	"./fr-ca": 404,
	"./fr-ca.js": 404,
	"./fr-ch": 405,
	"./fr-ch.js": 405,
	"./fr.js": 406,
	"./fy": 407,
	"./fy.js": 407,
	"./gd": 408,
	"./gd.js": 408,
	"./gl": 409,
	"./gl.js": 409,
	"./gom-latn": 410,
	"./gom-latn.js": 410,
	"./he": 411,
	"./he.js": 411,
	"./hi": 412,
	"./hi.js": 412,
	"./hr": 413,
	"./hr.js": 413,
	"./hu": 414,
	"./hu.js": 414,
	"./hy-am": 415,
	"./hy-am.js": 415,
	"./id": 416,
	"./id.js": 416,
	"./is": 417,
	"./is.js": 417,
	"./it": 418,
	"./it.js": 418,
	"./ja": 419,
	"./ja.js": 419,
	"./jv": 420,
	"./jv.js": 420,
	"./ka": 421,
	"./ka.js": 421,
	"./kk": 422,
	"./kk.js": 422,
	"./km": 423,
	"./km.js": 423,
	"./kn": 424,
	"./kn.js": 424,
	"./ko": 425,
	"./ko.js": 425,
	"./ky": 426,
	"./ky.js": 426,
	"./lb": 427,
	"./lb.js": 427,
	"./lo": 428,
	"./lo.js": 428,
	"./lt": 429,
	"./lt.js": 429,
	"./lv": 430,
	"./lv.js": 430,
	"./me": 431,
	"./me.js": 431,
	"./mi": 432,
	"./mi.js": 432,
	"./mk": 433,
	"./mk.js": 433,
	"./ml": 434,
	"./ml.js": 434,
	"./mr": 435,
	"./mr.js": 435,
	"./ms": 437,
	"./ms-my": 436,
	"./ms-my.js": 436,
	"./ms.js": 437,
	"./my": 438,
	"./my.js": 438,
	"./nb": 439,
	"./nb.js": 439,
	"./ne": 440,
	"./ne.js": 440,
	"./nl": 442,
	"./nl-be": 441,
	"./nl-be.js": 441,
	"./nl.js": 442,
	"./nn": 443,
	"./nn.js": 443,
	"./pa-in": 444,
	"./pa-in.js": 444,
	"./pl": 445,
	"./pl.js": 445,
	"./pt": 447,
	"./pt-br": 446,
	"./pt-br.js": 446,
	"./pt.js": 447,
	"./ro": 448,
	"./ro.js": 448,
	"./ru": 449,
	"./ru.js": 449,
	"./sd": 450,
	"./sd.js": 450,
	"./se": 451,
	"./se.js": 451,
	"./si": 452,
	"./si.js": 452,
	"./sk": 453,
	"./sk.js": 453,
	"./sl": 454,
	"./sl.js": 454,
	"./sq": 455,
	"./sq.js": 455,
	"./sr": 457,
	"./sr-cyrl": 456,
	"./sr-cyrl.js": 456,
	"./sr.js": 457,
	"./ss": 458,
	"./ss.js": 458,
	"./sv": 459,
	"./sv.js": 459,
	"./sw": 460,
	"./sw.js": 460,
	"./ta": 461,
	"./ta.js": 461,
	"./te": 462,
	"./te.js": 462,
	"./tet": 463,
	"./tet.js": 463,
	"./th": 464,
	"./th.js": 464,
	"./tl-ph": 465,
	"./tl-ph.js": 465,
	"./tlh": 466,
	"./tlh.js": 466,
	"./tr": 467,
	"./tr.js": 467,
	"./tzl": 468,
	"./tzl.js": 468,
	"./tzm": 470,
	"./tzm-latn": 469,
	"./tzm-latn.js": 469,
	"./tzm.js": 470,
	"./uk": 471,
	"./uk.js": 471,
	"./ur": 472,
	"./ur.js": 472,
	"./uz": 474,
	"./uz-latn": 473,
	"./uz-latn.js": 473,
	"./uz.js": 474,
	"./vi": 475,
	"./vi.js": 475,
	"./x-pseudo": 476,
	"./x-pseudo.js": 476,
	"./yo": 477,
	"./yo.js": 477,
	"./zh-cn": 478,
	"./zh-cn.js": 478,
	"./zh-hk": 479,
	"./zh-hk.js": 479,
	"./zh-tw": 480,
	"./zh-tw.js": 480
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 768;


/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "  <div class=\"\">\r\n\t<div class=\"page-title\">\r\n\t  <div class=\"title_left\">\r\n\t\t<h3>Aide / À propos</h3>\r\n\t  </div>\r\n\t</div>\r\n\r\n\t<div class=\"clearfix\"></div>\r\n\r\n\t<div class=\"row\">\r\n\t  <div class=\"col-md-6\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t  <div class=\"x_title\">\r\n\t\t\t<h2>Aide</h2>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t  </div>\r\n\t\t  <div class=\"x_content\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<p>Un manuel utilisateur est disponible au format PDF</p>\r\n\t\t\t\t<a href=\"\"><i class=\"fa fa-download fa-4x\" aria-hidden=\"true\"></i></a>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t  </div>\t\r\n\t\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"x_panel\">\r\n\t\t\t  <div class=\"x_title\">\r\n\t\t\t\t<h2>À propos de l'application PersoCloud</h2>\r\n\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"x_content\">\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<p>L'application PersoCloud est une application développée dans le cadre des projets de l'ISTIC du Master 1 informatique à Rennes lors de l'année universitaire 2016-2017. Notre groupe était constitué de huit personnes. Pour toutes demandes ou informations, vous pouvez nous contacter par mail en cliquant sur le nom d'un des membres du groupe, ou bien sur <a href=\"mailto:aurelien.anne@etudiant.univ-rennes1.fr,mounir.bouyamine@etudiant.univ-rennes1.fr,minh-anh.dang@etudiant.univ-rennes1.fr,lorenzo.mazzocchi@etudiant.univ-rennes1.fr,naima.sadoun@etudiant.univ-rennes1.fr,kevin.salmon@etudiant.univ-rennes1.fr,adou.soukpa@etudiant.univ-rennes1.fr,nadia.zerrouk@etudiant.univ-rennes1.fr\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> cette icone</a> pour contacter tout le monde.</p>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:aurelien.anne@etudiant.univ-rennes1.fr\">ANNE Aurélien</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:mounir.bouyamine@etudiant.univ-rennes1.fr\">BOUYAMINE Mounir</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:minh-anh.dang@etudiant.univ-rennes1.fr\">DANG Minh-Anh</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:lorenzo.mazzocchi@etudiant.univ-rennes1.fr\">MAZZOCCHI Lorenzo</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:naima.sadoun@etudiant.univ-rennes1.fr\">SADOUN Naïma</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:kevin.salmon@etudiant.univ-rennes1.fr\">SALMON Kevin</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:adou.soukpa@etudiant.univ-rennes1.fr\">SOUKPA Adou</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:nadia.zerrouk@etudiant.univ-rennes1.fr\">ZERROUK Nadia</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t  </div>\r\n  </div>"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\r\n  <div class=\"main_container\">\r\n\t<div class=\"col-md-3 left_col\">\r\n\t  <div class=\"left_col scroll-view\">\r\n\t\t<div class=\"navbar nav_title\" style=\"border: 0;\">\r\n\t\t  <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-pie-chart\"></i> <span>PersoCloud</span></a>\r\n\t\t</div>\r\n\t\t<div class=\"clearfix\"></div>\r\n\t\t<br />\r\n\t   <!-- sidebar menu -->\r\n\t\t<div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r\n\t\t  <div class=\"menu_section\">\r\n\t\t\t<h3>Général</h3>\r\n\t\t\t<ul class=\"nav side-menu\">\r\n\t\t\t  <li><a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-home\"></i> Accueil</a></li>\r\n\t\t\t  <li><a routerLink=\"/profil\" routerLinkActive=\"active\"><i class=\"fa fa-user\"></i> Votre profil</a></li>\r\n\t\t\t  <li><a routerLink=\"/partage\" routerLinkActive=\"active\"><i class=\"fa fa-share-alt\"></i> Votre politique de partage</a></li>\t\t\t  \r\n\t\t\t  <li><a routerLink=\"/aide\" routerLinkActive=\"active\"><i class=\"fa fa-info-circle\"></i> Aide / À propos</a></li>\r\n\t\t\t</ul>\r\n\t\t  </div>\r\n\t\t  <div *ngIf=\"envAnalyzeService == 'dummy'\" class=\"menu_section\">\r\n\t\t\t<ul class=\"nav side-menu\">\r\n\t\t\t  <li><a routerLink=\"#\" routerLinkActive=\"disabled\">\r\n\t\t\t\t/!\\ Le dummy service ne renvoit plus les bonnes données. Il faut compiler la partie cliente avec l'option dev_api.\r\n\t\t\t  </a></li>\t\t\t  \r\n\t\t\t</ul>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<!-- sidebar menu -->\r\n\t  </div>\r\n\t</div>\r\n\t\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"left_col scroll-view\">\r\n\t\t\t<!-- page content -->\r\n\t\t\t<div class=\"right_col\" role=\"main\">\r\n\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t<div> \r\n\t\t\t\t\t\t<!-- <donnees></donnees> -->\r\n\t\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t<!-- page content -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-12\"></div>\n\t<div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\n\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%\">\n\t\t\t<canvas baseChart\n\t\t\t\t[datasets]=\"barChartData\"\n\t\t\t\t[labels]=\"barChartLabels\"\n\t\t\t\t[options]=\"barChartOptions\"\n\t\t\t\t[legend]=\"barChartLegend\"\n\t\t\t\t[chartType]=\"barChartType\"\n\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-4 col-md-3 col-sm-1 col-xs-12\"></div>\n\t<div class=\"col-lg-4 col-md-6 col-sm-10 col-xs-12\">\n\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%\">\n\t\t\t<canvas baseChart\n\t\t\t\t[data]=\"doughnutChartData\"\n\t\t\t\t[labels]=\"doughnutChartLabels\"\n\t\t\t\t[chartType]=\"doughnutChartType\"\n\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-12\"></div>\n\t<div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\n\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%\">\n\t\t\t<canvas baseChart\n\t\t\t\t[datasets]=\"lineChartData\"\n\t\t\t\t[labels]=\"lineChartLabels\"\n\t\t\t\t[options]=\"lineChartOptions\"\n\t\t\t\t[colors]=\"lineChartColors\"\n\t\t\t\t[legend]=\"lineChartLegend\"\n\t\t\t\t[chartType]=\"lineChartType\"\n\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-4 col-md-3 col-sm-1 col-xs-12\"></div>\n\t<div class=\"col-lg-4 col-md-6 col-sm-10 col-xs-12\">\n\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%\">\n\t\t\t<canvas *ngIf=\"pieChartData\" baseChart\n\t\t\t\t[data]=\"pieChartData\"\n\t\t\t\t[labels]=\"pieChartLabels\"\n\t\t\t\t[chartType]=\"pieChartType\"\n\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-4 col-md-3 col-sm-1 col-xs-12\"></div>\n\t<div class=\"col-lg-4 col-md-6 col-sm-10 col-xs-12\">\n\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%\">\n\t\t\t<canvas baseChart\n\t\t\t\t[data]=\"polarAreaChartData\"\n\t\t\t\t[labels]=\"polarAreaChartLabels\"\n\t\t\t\t[legend]=\"polarAreaLegend\"\n\t\t\t\t[chartType]=\"polarAreaChartType\"\n\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-4 col-md-3 col-sm-1 col-xs-12\"></div>\n\t<div class=\"col-lg-4 col-md-6 col-sm-10 col-xs-12\">\n\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%\">\n\t\t\t<canvas baseChart\n\t\t\t\t[datasets]=\"radarChartData\"\n\t\t\t\t[labels]=\"radarChartLabels\"\n\t\t\t\t[chartType]=\"radarChartType\"\n\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t(chartClick)=\"chartClicked($event)\"></canvas>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\r\n  <div class=\"title_left\">\r\n\t<h3>Analyses</h3>\r\n  </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_title\">\r\n\t\t\t  <h2>Moteur de recherche</h2>\r\n\t\t\t  <div class=\"clearfix\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x_content\">\r\n\t\t\t\t<form class=\"form-horizontal form-label-left\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 form-group\">\r\n\t\t\t\t\t\t\t<label for=\"field\">Type de donnée</label>\r\n\t\t\t\t\t\t\t<select (change)=\"fieldChange($event.target.value)\" class=\"form-control\" id=\"field\">\r\n\t\t\t\t\t\t\t\t<!-- <option value=\"\" disabled selected>Type de donnée</option> -->\r\n\t\t\t\t\t\t\t\t<optgroup *ngFor=\"let availableField of availableFields\" label=\"{{ availableField.groupLabel }}\">\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of availableField.items\" value=\"{{ item.field }}\">{{ item.label }}</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 form-group\">\r\n\t\t\t\t\t\t\t<label for=\"group\">Regrouper les données par</label>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<select (change)=\"groupChange($event.target.value)\" class=\"form-control\" id=\"group\">\r\n\t\t\t\t\t\t\t\t<!--<option value=\"\" selected>Regrouper par</option>-->\r\n\t\t\t\t\t\t\t\t<option value=\"time\">Temps</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of availableGroupKeys[analyzeOptions.field]\" value=\"{{ item.key }}\">{{ item.label }}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"analyzeOptions?.group == 'time'\" class=\"col-md-3 col-sm-3 col-xs-12 form-group\"> \r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\t\r\n\t\t\t\t\t\t\t\t\t<label for=\"groupTimeValue\">Précision</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"groupTimeValue\" (change)=\"groupTimeValueChange($event.target.value)\" min=\"1\" max=\"365\" value=\"1\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t\t\t\t<select (change)=\"groupTimeDurationChange($event.target.value)\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"h\">heure</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"d\">jour</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"w\" selected>semaine</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"y\">année</option>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--<div class=\"col-md-3 col-sm-3 col-xs-12 form-group\"> \r\n\t\t\t\t\t\t\t<select (change)=\"metakeyChange($event.target.value)\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"analyzeOptions?.field == undefined\" value=\"\" disabled selected>Metakey</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of availableMetaKeys[analyzeOptions.field]\" value=\"{{ item.key }}\">{{ item.label }}</option>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>-->\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 form-group\" style=\"height:70px;\">\r\n\t\t\t\t\t\t\t<div style=\"width: 60px; height: 70px;\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\" style=\"width: 40px; margin-left: auto; margin-right: auto; position: relative; top: 50%; transform: translateY(-50%);\">Période</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div style=\"width: 92%; position: relative; top: -70px; margin-left: 70px;\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"period_slider\" name=\"period_slider\" value=\"\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12 form-group\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"btnAnalyzeDisabled\" (click)=getAnalyze() tooltip=\"{{ btnAnalyzeDescription }}\" placement=\"right\">{{ btnAnalyzeValue }}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"serviceError != undefined\" class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t<alert type=\"error\" dismissible=\"true\">{{ serviceError }}</alert>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"analyzeResults\" class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\t\t\t\r\n\t\t\t<donnees-traitement [donnees]=\"analyzeResults\" [analyzeOptions]=\"analyzeOptions\"></donnees-traitement>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--\r\n<div>\r\n\t<h2>Données cozy - Données & Metadonnées</h2>\r\n\t<pre *ngIf=\"analyzeResults\">{{ analyzeResults.cozy | json }}</pre>\r\n</div>\r\n<div>\r\n\t<h2>Données moteur</h2>\r\n\t<h2>Metadonnées</h2>\r\n\t<pre *ngIf=\"analyzeResults\">{{ analyzeResults.engine.meta | json }}</pre>\r\n\t<h2>Données</h2>\r\n\t<pre *ngIf=\"analyzeResults\">{{ analyzeResults.engine.data | json }}</pre>\r\n</div>-->"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal form-label-left\">\r\n\t<div class=\"form-group\">\r\n\t\t<label class=\"control-label col-sm-1 col-xs-12\">Diagramme</label>\r\n\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<label *ngIf=\"valuesForChart\" class=\"btn btn-primary\" [(ngModel)]=\"typeChart\" btnRadio=\"doughnut\">Donut</label>\r\n\t\t\t\t<label *ngIf=\"valuesForChart\" class=\"btn btn-primary\" [(ngModel)]=\"typeChart\" btnRadio=\"pie\">Camembert</label>\r\n\t\t\t\t<label *ngIf=\"valuesForChart\" class=\"btn btn-primary\" [(ngModel)]=\"typeChart\" btnRadio=\"polar\">Polar Chart</label>\r\n\t\t\t\t<label *ngIf=\"valuesForBarChart\" class=\"btn btn-warning\" [(ngModel)]=\"typeChart\" btnRadio=\"bar\">Barres</label>\r\n\t\t\t\t<label *ngIf=\"valuesForBarChart\" class=\"btn btn-warning\" [(ngModel)]=\"typeChart\" btnRadio=\"radar\">Radar</label>\r\n\t\t\t\t<label *ngIf=\"valuesForBarChart\" class=\"btn btn-warning\" [(ngModel)]=\"typeChart\" btnRadio=\"line\">Lignes</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<label class=\"control-label col-sm-1 col-xs-12\">Agrégat</label>\r\n\t\t<div class=\"col-sm-2 col-xs-12\">\r\n\t\t\t<select (change)=\"aggregateChange($event.target.value)\" class=\"form-control\">\r\n\t\t\t\t<option value=\"count\">Nombre</option>\r\n\t\t\t\t<option value=\"mean\">Moyenne</option>\t\t\t\t\t\t\t\t\r\n\t\t\t\t<option value=\"sum\">Somme</option>\r\n\t\t\t\t<option value=\"min\">Minimun</option>\r\n\t\t\t\t<option value=\"max\">Maximun</option>\r\n\t\t\t\t<option value=\"median\">Médiane</option>\r\n\t\t\t\t<option value=\"stddev\">Écart type</option>\r\n\t\t\t\t<option value=\"first\">Premier élément</option>\r\n\t\t\t\t<option value=\"last\">Dernier élément</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n</div>\t\t\t\t\t\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_content\">\t\r\n\t\t\t\t<div [ngSwitch]=\"typeChart\">\r\n\t\t\t\t\t<doughnut-chart template=\"ngSwitchCase 'doughnut'\" [label]=\"labels\" [valuesForChart]=\"valuesForChart\"></doughnut-chart>\r\n\t\t\t\t\t<pie-chart  template=\"ngSwitchCase 'pie'\" [label]=\"labels\" [valuesForChart]=\"valuesForChart\"></pie-chart>\r\n\t\t\t\t\t<polar-area-chart  template=\"ngSwitchCase 'polar'\" [label]=\"labels\" [valuesForChart]=\"valuesForChart\"></polar-area-chart>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<bar-chart template=\"ngSwitchCase 'bar'\" [label]=\"labels\" [valuesForChart]=\"valuesForBarChart\"></bar-chart>\r\n\t\t\t\t\t<radar-chart  template=\"ngSwitchCase 'radar'\" [label]=\"labels\" [valuesForChart]=\"valuesForBarChart\"></radar-chart>\r\n\t\t\t\t\t<line-chart template=\"ngSwitchCase 'line'\" [label]=\"labels\" [valuesForChart]=\"valuesForBarChart\"></line-chart>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\r\n  <h3>Votre politique de partage de données</h3>\r\n</div>\r\n<div class=\"clearfix\"></div>\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_title\">\r\n\t\t\t  <h2>Autorisations de partage de données</h2>\r\n\t\t\t  <div class=\"clearfix\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x_content\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\" ></div>\r\n\t\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-12\" style=\"height:70px;\">\r\n\t\t\t\t\t\t<div style=\"width: 120px; height: 70px; text-align: right;\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" style=\"position: relative; top: 50%; transform: translateY(-50%);\">Niveau de partage</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div style=\"position: relative; top: -70px; margin-left: 140px;\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"level_slider\" name=\"level_slider\" value=\"\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\" ></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" style=\"margin-top: 10px; text-align:justify;\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\"></div>\r\n\t\t\t\t\t<div id=\"level_details\" class=\"col-md-8 col-sm-8 col-xs-12\" >\r\n\t\t\t\t\t\t{{levelDescription}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" style=\"margin-top: 10px;\">\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t<span class=\"section\">Humeur</span>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Humeur</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"section\">Consommation</span>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > EDF</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Direct Energie</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"section\">Factures</span>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<!-- <label *ngFor=\"let cb of checkboxes\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"cb.chosen\">{{cb.label}}\r\n\t\t\t\t\t\t\t\t</label> -->\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Numericable</label><br>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Bouygues Box</label><br>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Free</label><br>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Orange</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Free Mobile</label><br>\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Sfr mobile</label><br>\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Sosh</label><br>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Virgin mobile</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Voyages SNCF</label><br>\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > APRR</label><br>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Ameli</label><br>\t\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Github</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Materiel.net</label><br>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > vente-privee.com</label><br>\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\" > Darty</label>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"section\">Données bancaires</span>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\"> Caisse d'Epargne</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\"> Crédit Agricole</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\"> Crédit Mutuel</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" name=\"quux[1]\"> LCL</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\r\n  </div>\r\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\r\n  <div class=\"title_left\">\r\n\t<h3>Votre profil</h3>\r\n  </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_title\">\r\n\t\t\t  <h2>Informations personnelles</h2>\r\n\t\t\t  <div class=\"clearfix\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x_content\">\r\n\t\t\t<form class=\"form-horizontal form-label-left\" novalidate>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-3\">Date de naissance</label>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item form-group\" style=\"margin-bottom:15px;\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Genre</label>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary active\" [(ngModel)]=\"radioGendor\" [ngModelOptions]=\"{standalone: true}\" btnRadio=\"unspecified\">Non précisé</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"radioGendor\" [ngModelOptions]=\"{standalone: true}\"  btnRadio=\"female\">Femme</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"radioGendor\" [ngModelOptions]=\"{standalone: true}\"  btnRadio=\"male\">Homme</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"radioGendor\" [ngModelOptions]=\"{standalone: true}\"  btnRadio=\"other\">Autre</label>\t\t\t\t\t\t  \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item form-group\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Pays</label>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t  <select class=\"form-control\">\r\n\t\t\t\t\t\t<option value=\"France\" selected>France</option>\r\n\t\t\t\t\t\t<option value=\"Afghanistan\">Afghanistan </option>\r\n\t\t\t\t\t\t<option value=\"Afrique_Centrale\">Afrique Centrale </option>\r\n\t\t\t\t\t\t<option value=\"Afrique_du_sud\">Afrique du Sud </option>\r\n\t\t\t\t\t\t<option value=\"Albanie\">Albanie </option>\r\n\t\t\t\t\t\t<option value=\"Algerie\">Algerie </option>\r\n\t\t\t\t\t\t<option value=\"Allemagne\">Allemagne </option>\r\n\t\t\t\t\t\t<option value=\"Andorre\">Andorre </option>\r\n\t\t\t\t\t\t<option value=\"Angola\">Angola </option>\r\n\t\t\t\t\t\t<option value=\"Anguilla\">Anguilla </option>\r\n\t\t\t\t\t\t<option value=\"Arabie_Saoudite\">Arabie Saoudite </option>\r\n\t\t\t\t\t\t<option value=\"Argentine\">Argentine </option>\r\n\t\t\t\t\t\t<option value=\"Armenie\">Armenie </option>\r\n\t\t\t\t\t\t<option value=\"Australie\">Australie </option>\r\n\t\t\t\t\t\t<option value=\"Autriche\">Autriche </option>\r\n\t\t\t\t\t\t<option value=\"Azerbaidjan\">Azerbaidjan </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Bahamas\">Bahamas </option>\r\n\t\t\t\t\t\t<option value=\"Bangladesh\">Bangladesh </option>\r\n\t\t\t\t\t\t<option value=\"Barbade\">Barbade </option>\r\n\t\t\t\t\t\t<option value=\"Bahrein\">Bahrein </option>\r\n\t\t\t\t\t\t<option value=\"Belgique\">Belgique </option>\r\n\t\t\t\t\t\t<option value=\"Belize\">Belize </option>\r\n\t\t\t\t\t\t<option value=\"Benin\">Benin </option>\r\n\t\t\t\t\t\t<option value=\"Bermudes\">Bermudes </option>\r\n\t\t\t\t\t\t<option value=\"Bielorussie\">Bielorussie </option>\r\n\t\t\t\t\t\t<option value=\"Bolivie\">Bolivie </option>\r\n\t\t\t\t\t\t<option value=\"Botswana\">Botswana </option>\r\n\t\t\t\t\t\t<option value=\"Bhoutan\">Bhoutan </option>\r\n\t\t\t\t\t\t<option value=\"Boznie_Herzegovine\">Boznie Herzegovine </option>\r\n\t\t\t\t\t\t<option value=\"Bresil\">Bresil </option>\r\n\t\t\t\t\t\t<option value=\"Brunei\">Brunei </option>\r\n\t\t\t\t\t\t<option value=\"Bulgarie\">Bulgarie </option>\r\n\t\t\t\t\t\t<option value=\"Burkina_Faso\">Burkina_Faso </option>\r\n\t\t\t\t\t\t<option value=\"Burundi\">Burundi </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Caiman\">Caiman </option>\r\n\t\t\t\t\t\t<option value=\"Cambodge\">Cambodge </option>\r\n\t\t\t\t\t\t<option value=\"Cameroun\">Cameroun </option>\r\n\t\t\t\t\t\t<option value=\"Canada\">Canada </option>\r\n\t\t\t\t\t\t<option value=\"Canaries\">Canaries </option>\r\n\t\t\t\t\t\t<option value=\"Cap_vert\">Cap Vert </option>\r\n\t\t\t\t\t\t<option value=\"Chili\">Chili </option>\r\n\t\t\t\t\t\t<option value=\"Chine\">Chine </option>\r\n\t\t\t\t\t\t<option value=\"Chypre\">Chypre </option>\r\n\t\t\t\t\t\t<option value=\"Colombie\">Colombie </option>\r\n\t\t\t\t\t\t<option value=\"Comores\">Colombie </option>\r\n\t\t\t\t\t\t<option value=\"Congo\">Congo </option>\r\n\t\t\t\t\t\t<option value=\"Congo_democratique\">Congo democratique </option>\r\n\t\t\t\t\t\t<option value=\"Cook\">Cook </option>\r\n\t\t\t\t\t\t<option value=\"Coree_du_Nord\">Coree du Nord </option>\r\n\t\t\t\t\t\t<option value=\"Coree_du_Sud\">Coree du Sud </option>\r\n\t\t\t\t\t\t<option value=\"Costa_Rica\">Costa Rica </option>\r\n\t\t\t\t\t\t<option value=\"Cote_d_Ivoire\">Côte d'Ivoire </option>\r\n\t\t\t\t\t\t<option value=\"Croatie\">Croatie </option>\r\n\t\t\t\t\t\t<option value=\"Cuba\">Cuba </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Danemark\">Danemark </option>\r\n\t\t\t\t\t\t<option value=\"Djibouti\">Djibouti </option>\r\n\t\t\t\t\t\t<option value=\"Dominique\">Dominique </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Egypte\">Egypte </option>\r\n\t\t\t\t\t\t<option value=\"Emirats_Arabes_Unis\">Emirats Arabes Unis </option>\r\n\t\t\t\t\t\t<option value=\"Equateur\">Equateur </option>\r\n\t\t\t\t\t\t<option value=\"Erythree\">Erythree </option>\r\n\t\t\t\t\t\t<option value=\"Espagne\">Espagne </option>\r\n\t\t\t\t\t\t<option value=\"Estonie\">Estonie </option>\r\n\t\t\t\t\t\t<option value=\"Etats_Unis\">Etats Unis </option>\r\n\t\t\t\t\t\t<option value=\"Ethiopie\">Ethiopie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Falkland\">Falkland </option>\r\n\t\t\t\t\t\t<option value=\"Feroe\">Feroe </option>\r\n\t\t\t\t\t\t<option value=\"Fidji\">Fidji </option>\r\n\t\t\t\t\t\t<option value=\"Finlande\">Finlande </option>\r\n\t\t\t\t\t\t<option value=\"France\">France </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Gabon\">Gabon </option>\r\n\t\t\t\t\t\t<option value=\"Gambie\">Gambie </option>\r\n\t\t\t\t\t\t<option value=\"Georgie\">Georgie </option>\r\n\t\t\t\t\t\t<option value=\"Ghana\">Ghana </option>\r\n\t\t\t\t\t\t<option value=\"Gibraltar\">Gibraltar </option>\r\n\t\t\t\t\t\t<option value=\"Grece\">Grece </option>\r\n\t\t\t\t\t\t<option value=\"Grenade\">Grenade </option>\r\n\t\t\t\t\t\t<option value=\"Groenland\">Groenland </option>\r\n\t\t\t\t\t\t<option value=\"Guadeloupe\">Guadeloupe </option>\r\n\t\t\t\t\t\t<option value=\"Guam\">Guam </option>\r\n\t\t\t\t\t\t<option value=\"Guatemala\">Guatemala</option>\r\n\t\t\t\t\t\t<option value=\"Guernesey\">Guernesey </option>\r\n\t\t\t\t\t\t<option value=\"Guinee\">Guinee </option>\r\n\t\t\t\t\t\t<option value=\"Guinee_Bissau\">Guinee_Bissau </option>\r\n\t\t\t\t\t\t<option value=\"Guinee equatoriale\">Guinee Equatoriale </option>\r\n\t\t\t\t\t\t<option value=\"Guyana\">Guyana </option>\r\n\t\t\t\t\t\t<option value=\"Guyane_Francaise \">Guyane Francaise </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Haiti\">Haiti </option>\r\n\t\t\t\t\t\t<option value=\"Hawaii\">Hawaii </option>\r\n\t\t\t\t\t\t<option value=\"Honduras\">Honduras </option>\r\n\t\t\t\t\t\t<option value=\"Hong_Kong\">Hong_Kong </option>\r\n\t\t\t\t\t\t<option value=\"Hongrie\">Hongrie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Inde\">Inde </option>\r\n\t\t\t\t\t\t<option value=\"Indonesie\">Indonesie </option>\r\n\t\t\t\t\t\t<option value=\"Iran\">Iran </option>\r\n\t\t\t\t\t\t<option value=\"Iraq\">Iraq </option>\r\n\t\t\t\t\t\t<option value=\"Irlande\">Irlande </option>\r\n\t\t\t\t\t\t<option value=\"Islande\">Islande </option>\r\n\t\t\t\t\t\t<option value=\"Israel\">Israel </option>\r\n\t\t\t\t\t\t<option value=\"Italie\">italie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Jamaique\">Jamaique </option>\r\n\t\t\t\t\t\t<option value=\"Jan Mayen\">Jan Mayen </option>\r\n\t\t\t\t\t\t<option value=\"Japon\">Japon </option>\r\n\t\t\t\t\t\t<option value=\"Jersey\">Jersey </option>\r\n\t\t\t\t\t\t<option value=\"Jordanie\">Jordanie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Kazakhstan\">Kazakhstan </option>\r\n\t\t\t\t\t\t<option value=\"Kenya\">Kenya </option>\r\n\t\t\t\t\t\t<option value=\"Kirghizstan\">Kirghizistan </option>\r\n\t\t\t\t\t\t<option value=\"Kiribati\">Kiribati </option>\r\n\t\t\t\t\t\t<option value=\"Koweit\">Koweit </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Laos\">Laos </option>\r\n\t\t\t\t\t\t<option value=\"Lesotho\">Lesotho </option>\r\n\t\t\t\t\t\t<option value=\"Lettonie\">Lettonie </option>\r\n\t\t\t\t\t\t<option value=\"Liban\">Liban </option>\r\n\t\t\t\t\t\t<option value=\"Liberia\">Liberia </option>\r\n\t\t\t\t\t\t<option value=\"Liechtenstein\">Liechtenstein </option>\r\n\t\t\t\t\t\t<option value=\"Lituanie\">Lituanie </option>\r\n\t\t\t\t\t\t<option value=\"Luxembourg\">Luxembourg </option>\r\n\t\t\t\t\t\t<option value=\"Lybie\">Lybie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Macao\">Macao </option>\r\n\t\t\t\t\t\t<option value=\"Macedoine\">Macedoine </option>\r\n\t\t\t\t\t\t<option value=\"Madagascar\">Madagascar </option>\r\n\t\t\t\t\t\t<option value=\"Madère\">Madère </option>\r\n\t\t\t\t\t\t<option value=\"Malaisie\">Malaisie </option>\r\n\t\t\t\t\t\t<option value=\"Malawi\">Malawi </option>\r\n\t\t\t\t\t\t<option value=\"Maldives\">Maldives </option>\r\n\t\t\t\t\t\t<option value=\"Mali\">Mali </option>\r\n\t\t\t\t\t\t<option value=\"Malte\">Malte </option>\r\n\t\t\t\t\t\t<option value=\"Man\">Man </option>\r\n\t\t\t\t\t\t<option value=\"Mariannes du Nord\">Mariannes du Nord </option>\r\n\t\t\t\t\t\t<option value=\"Maroc\">Maroc </option>\r\n\t\t\t\t\t\t<option value=\"Marshall\">Marshall </option>\r\n\t\t\t\t\t\t<option value=\"Martinique\">Martinique </option>\r\n\t\t\t\t\t\t<option value=\"Maurice\">Maurice </option>\r\n\t\t\t\t\t\t<option value=\"Mauritanie\">Mauritanie </option>\r\n\t\t\t\t\t\t<option value=\"Mayotte\">Mayotte </option>\r\n\t\t\t\t\t\t<option value=\"Mexique\">Mexique </option>\r\n\t\t\t\t\t\t<option value=\"Micronesie\">Micronesie </option>\r\n\t\t\t\t\t\t<option value=\"Midway\">Midway </option>\r\n\t\t\t\t\t\t<option value=\"Moldavie\">Moldavie </option>\r\n\t\t\t\t\t\t<option value=\"Monaco\">Monaco </option>\r\n\t\t\t\t\t\t<option value=\"Mongolie\">Mongolie </option>\r\n\t\t\t\t\t\t<option value=\"Montserrat\">Montserrat </option>\r\n\t\t\t\t\t\t<option value=\"Mozambique\">Mozambique </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Namibie\">Namibie </option>\r\n\t\t\t\t\t\t<option value=\"Nauru\">Nauru </option>\r\n\t\t\t\t\t\t<option value=\"Nepal\">Nepal </option>\r\n\t\t\t\t\t\t<option value=\"Nicaragua\">Nicaragua </option>\r\n\t\t\t\t\t\t<option value=\"Niger\">Niger </option>\r\n\t\t\t\t\t\t<option value=\"Nigeria\">Nigeria </option>\r\n\t\t\t\t\t\t<option value=\"Niue\">Niue </option>\r\n\t\t\t\t\t\t<option value=\"Norfolk\">Norfolk </option>\r\n\t\t\t\t\t\t<option value=\"Norvege\">Norvege </option>\r\n\t\t\t\t\t\t<option value=\"Nouvelle_Caledonie\">Nouvelle_Caledonie </option>\r\n\t\t\t\t\t\t<option value=\"Nouvelle_Zelande\">Nouvelle_Zelande </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Oman\">Oman </option>\r\n\t\t\t\t\t\t<option value=\"Ouganda\">Ouganda </option>\r\n\t\t\t\t\t\t<option value=\"Ouzbekistan\">Ouzbekistan </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Pakistan\">Pakistan </option>\r\n\t\t\t\t\t\t<option value=\"Palau\">Palau </option>\r\n\t\t\t\t\t\t<option value=\"Palestine\">Palestine </option>\r\n\t\t\t\t\t\t<option value=\"Panama\">Panama </option>\r\n\t\t\t\t\t\t<option value=\"Papouasie_Nouvelle_Guinee\">Papouasie_Nouvelle_Guinee </option>\r\n\t\t\t\t\t\t<option value=\"Paraguay\">Paraguay </option>\r\n\t\t\t\t\t\t<option value=\"Pays_Bas\">Pays_Bas </option>\r\n\t\t\t\t\t\t<option value=\"Perou\">Perou </option>\r\n\t\t\t\t\t\t<option value=\"Philippines\">Philippines </option>\r\n\t\t\t\t\t\t<option value=\"Pologne\">Pologne </option>\r\n\t\t\t\t\t\t<option value=\"Polynesie\">Polynesie </option>\r\n\t\t\t\t\t\t<option value=\"Porto_Rico\">Porto_Rico </option>\r\n\t\t\t\t\t\t<option value=\"Portugal\">Portugal </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Qatar\">Qatar </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Republique_Dominicaine\">Republique_Dominicaine </option>\r\n\t\t\t\t\t\t<option value=\"Republique_Tcheque\">Republique_Tcheque </option>\r\n\t\t\t\t\t\t<option value=\"Reunion\">Reunion </option>\r\n\t\t\t\t\t\t<option value=\"Roumanie\">Roumanie </option>\r\n\t\t\t\t\t\t<option value=\"Royaume_Uni\">Royaume_Uni </option>\r\n\t\t\t\t\t\t<option value=\"Russie\">Russie </option>\r\n\t\t\t\t\t\t<option value=\"Rwanda\">Rwanda </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Sahara Occidental\">Sahara Occidental </option>\r\n\t\t\t\t\t\t<option value=\"Sainte_Lucie\">Sainte_Lucie </option>\r\n\t\t\t\t\t\t<option value=\"Saint_Marin\">Saint_Marin </option>\r\n\t\t\t\t\t\t<option value=\"Salomon\">Salomon </option>\r\n\t\t\t\t\t\t<option value=\"Salvador\">Salvador </option>\r\n\t\t\t\t\t\t<option value=\"Samoa_Occidentales\">Samoa_Occidentales</option>\r\n\t\t\t\t\t\t<option value=\"Samoa_Americaine\">Samoa_Americaine </option>\r\n\t\t\t\t\t\t<option value=\"Sao_Tome_et_Principe\">Sao_Tome_et_Principe </option>\r\n\t\t\t\t\t\t<option value=\"Senegal\">Senegal </option>\r\n\t\t\t\t\t\t<option value=\"Seychelles\">Seychelles </option>\r\n\t\t\t\t\t\t<option value=\"Sierra Leone\">Sierra Leone </option>\r\n\t\t\t\t\t\t<option value=\"Singapour\">Singapour </option>\r\n\t\t\t\t\t\t<option value=\"Slovaquie\">Slovaquie </option>\r\n\t\t\t\t\t\t<option value=\"Slovenie\">Slovenie</option>\r\n\t\t\t\t\t\t<option value=\"Somalie\">Somalie </option>\r\n\t\t\t\t\t\t<option value=\"Soudan\">Soudan </option>\r\n\t\t\t\t\t\t<option value=\"Sri_Lanka\">Sri_Lanka </option>\r\n\t\t\t\t\t\t<option value=\"Suede\">Suede </option>\r\n\t\t\t\t\t\t<option value=\"Suisse\">Suisse </option>\r\n\t\t\t\t\t\t<option value=\"Surinam\">Surinam </option>\r\n\t\t\t\t\t\t<option value=\"Swaziland\">Swaziland </option>\r\n\t\t\t\t\t\t<option value=\"Syrie\">Syrie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Tadjikistan\">Tadjikistan </option>\r\n\t\t\t\t\t\t<option value=\"Taiwan\">Taiwan </option>\r\n\t\t\t\t\t\t<option value=\"Tonga\">Tonga </option>\r\n\t\t\t\t\t\t<option value=\"Tanzanie\">Tanzanie </option>\r\n\t\t\t\t\t\t<option value=\"Tchad\">Tchad </option>\r\n\t\t\t\t\t\t<option value=\"Thailande\">Thailande </option>\r\n\t\t\t\t\t\t<option value=\"Tibet\">Tibet </option>\r\n\t\t\t\t\t\t<option value=\"Timor_Oriental\">Timor_Oriental </option>\r\n\t\t\t\t\t\t<option value=\"Togo\">Togo </option>\r\n\t\t\t\t\t\t<option value=\"Trinite_et_Tobago\">Trinite_et_Tobago </option>\r\n\t\t\t\t\t\t<option value=\"Tristan da cunha\">Tristan de cuncha </option>\r\n\t\t\t\t\t\t<option value=\"Tunisie\">Tunisie </option>\r\n\t\t\t\t\t\t<option value=\"Turkmenistan\">Turmenistan </option>\r\n\t\t\t\t\t\t<option value=\"Turquie\">Turquie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Ukraine\">Ukraine </option>\r\n\t\t\t\t\t\t<option value=\"Uruguay\">Uruguay </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Vanuatu\">Vanuatu </option>\r\n\t\t\t\t\t\t<option value=\"Vatican\">Vatican </option>\r\n\t\t\t\t\t\t<option value=\"Venezuela\">Venezuela </option>\r\n\t\t\t\t\t\t<option value=\"Vierges_Americaines\">Vierges_Americaines </option>\r\n\t\t\t\t\t\t<option value=\"Vierges_Britanniques\">Vierges_Britanniques </option>\r\n\t\t\t\t\t\t<option value=\"Vietnam\">Vietnam </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Wake\">Wake </option>\r\n\t\t\t\t\t\t<option value=\"Wallis et Futuma\">Wallis et Futuma </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Yemen\">Yemen </option>\r\n\t\t\t\t\t\t<option value=\"Yougoslavie\">Yougoslavie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Zambie\">Zambie </option>\r\n\t\t\t\t\t\t<option value=\"Zimbabwe\">Zimbabwe </option>\r\n\t\t\t\t\t  </select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"item form-group\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code postal</label>\r\n\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t  <input type=\"text\" class=\"form-control\" name=\"zipcode\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"control-label col-md-1 col-sm-1 col-xs-12\">Ville</label>\r\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t  <input type=\"text\" class=\"form-control\" name=\"city\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t  \r\n\t\t\t\t<div class=\"ln_solid\"></div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-6 col-md-offset-3\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Annuler</button>\r\n\t\t\t\t\t\t<button id=\"send\" type=\"submit\" class=\"btn btn-success\">Enregistrer</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(556);


/***/ })

},[851]);
//# sourceMappingURL=main.bundle.js.map