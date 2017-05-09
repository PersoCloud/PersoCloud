webpackJsonp([2,5],{

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(607);


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionService = (function () {
    function OptionService(http) {
        this.http = http;
    }
    OptionService.prototype.getApiPath = function (option) {
        var path = "/apps/persocloud/api/" + option;
        console.log("Demande à l'API serveur : http://localhost:9104" + path);
        return path;
    };
    OptionService.prototype.getProfile = function () {
        if (this.previousProfile != undefined) {
            return this.previousProfile;
        }
        var results = this.http.get(this.getApiPath('profile'))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        this.previousProfile = results;
        return results;
    };
    OptionService.prototype.setProfile = function (profile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.getApiPath('profile'), JSON.stringify(profile), options);
    };
    OptionService.prototype.getSharingPermissions = function () {
        if (this.previousSharingPermissions != undefined) {
            return this.previousSharingPermissions;
        }
        var results = this.http.get(this.getApiPath('sharing_permissions'))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        this.previousSharingPermissions = results;
        return results;
    };
    OptionService.prototype.setSharingPermissions = function (permissions) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.getApiPath('sharing_permissions'), JSON.stringify(permissions), options);
    };
    OptionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    OptionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], OptionService);
    return OptionService;
    var _a;
}());
//# sourceMappingURL=option.service.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    analyze_service: "http"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 372:
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
            template: __webpack_require__(853)
        }), 
        __metadata('design:paramtypes', [])
    ], AideComponent);
    return AideComponent;
}());
//# sourceMappingURL=aide.component.js.map

/***/ }),

/***/ 373:
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analyze_mock__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(579);
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
            path += "&period=" + moment(options.period.start, 'X').utc().toISOString() + ";" + moment(options.period.end, 'X').utc().toISOString();
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AnalyzeService);
    return AnalyzeService;
    var _a;
}());
//# sourceMappingURL=analyze.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_daterangepicker__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analyze_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analyze_availableData__ = __webpack_require__(738);
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
        this.availableFields = __WEBPACK_IMPORTED_MODULE_3__analyze_availableData__["a" /* AvailableData */].fields;
        this.availableMetaKeys = __WEBPACK_IMPORTED_MODULE_3__analyze_availableData__["a" /* AvailableData */].metakeyKeys;
        this.availableGroupKeys = __WEBPACK_IMPORTED_MODULE_3__analyze_availableData__["a" /* AvailableData */].groupKeys;
        this.serviceError = undefined;
        this.groupTimeValue = 1;
        this.groupTimeDuration = 'w';
        this.btnAnalyzeDisabled = false;
        this.btnAnalyzeValue = "Lancer l'analyse";
        this.analyzeStarted = false;
        this.period_daterange = {};
        this.period_daterange_options = {
            "startDate": moment().utc().subtract(1, "months").startOf('day'),
            "endDate": moment().utc(),
            "maxDate": moment().utc(),
            "showDropdowns": true,
            "showWeekNumbers": true,
            "timePicker": true,
            "timePicker24Hour": true,
            "timePickerSeconds": true,
            "autoApply": true,
            "ranges": {
                'Aujourd\'hui': [moment().utc().startOf('day'), moment().utc().endOf('day')],
                'Hier': [moment().utc().subtract(1, 'days').startOf('day'), moment().utc().subtract(1, 'days').endOf('day')],
                'Trois derniers jours': [moment().utc().subtract(3, 'days').startOf('day'), moment().utc()],
                'Cette semaine': [moment().utc().subtract(6, 'days').startOf('day'), moment().utc()],
                'Ce mois': [moment().utc().startOf('month'), moment().utc().endOf('month')],
                'Le mois dernier': [moment().utc().subtract(1, 'month').startOf('month'), moment().utc().subtract(1, 'month').endOf('month')],
                'Cette année': [moment().utc().subtract(1, 'year').startOf('year'), moment().utc()]
            },
            "locale": {
                "format": "DD/MM/YYYY HH:mm:ss",
                "separator": " - ",
                "applyLabel": "Appliquer",
                "cancelLabel": "Annuler",
                "fromLabel": "De",
                "toLabel": "A",
                "customRangeLabel": "Personnalisé",
                "weekLabel": "S",
                "daysOfWeek": ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
                "monthNames": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                "firstDay": 1
            },
            "alwaysShowCalendars": true
        };
    }
    // Au chargement de la page
    DonneesComponent.prototype.ngOnInit = function () {
        var defaultField = this.availableFields[0].items[0].field;
        this.analyzeOptions = {
            field: defaultField,
            metakey: this.availableMetaKeys[defaultField][0].key,
            group: "time",
            period: {
                start: moment().subtract(1, "months").startOf('day').format("X"),
                end: moment().endOf('day').format("X")
            }
        };
        this.analyzeOptions_editing = this.analyzeOptions;
    };
    // Après la génération de la page
    DonneesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery("#period_slider").ionRangeSlider({
            type: "double",
            min: moment().subtract(1, "years").format("X"),
            max: moment().format("X"),
            from: moment().subtract(1, "months").format("X"),
            grid: true,
            grid_num: 6,
            step: 86400,
            min_interval: 1,
            keyboard: true,
            keyboard_step: 0.5,
            force_edges: true,
            prettify: function (num) {
                return moment(num, "X").locale("fr").format("DD/MM/YYYY");
            },
            onChange: function (slider) {
                _this.periodChange(slider);
            },
            onFinish: function (slider) {
                _this.periodFinish(slider);
            }
        });
    };
    ////// Lancement de l'analyse
    DonneesComponent.prototype.getAnalyze = function () {
        var _this = this;
        this.serviceError = undefined;
        this.analyzeOptions = this.analyzeOptions_editing;
        if (this.analyzeOptions.field != undefined) {
            this.btnAnalyzeDisabled = true;
            this.btnAnalyzeValue = "Analyse en cours...";
            this.analyzeStarted = true;
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
                _this.analyzeStarted = false;
            })
                .catch(function (e) {
                if (e.status == 503) {
                    _this.serviceError = "Erreur " + e.status + " : Le moteur de calcul de PersoCloud n'est pas disponible";
                }
                else {
                    _this.serviceError = "Erreur " + e.status + " : " + e.statusText;
                }
                _this.activeBtnAnalyze();
                _this.analyzeStarted = false;
            });
        }
    };
    ////// Recherche
    DonneesComponent.prototype.fieldChange = function (item) {
        this.analyzeOptions_editing = {
            field: item,
            metakey: this.availableMetaKeys[item][0].key,
            group: "time",
            period: this.analyzeOptions_editing.period
        };
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.metakeyChange = function (item) {
        this.analyzeOptions_editing = {
            field: this.analyzeOptions_editing.field,
            metakey: item,
            group: this.analyzeOptions_editing.group,
            period: this.analyzeOptions_editing.period
        };
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.groupChange = function (item) {
        this.analyzeOptions_editing = {
            field: this.analyzeOptions_editing.field,
            metakey: this.analyzeOptions_editing.metakey,
            group: item == "" ? undefined : item,
            period: this.analyzeOptions_editing.period
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
    DonneesComponent.prototype.selectedPeriodDaterange = function (value) {
        this.period_daterange.start = value.start;
        this.period_daterange.end = value.end;
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.periodFinish = function (slider) {
        this.analyzeOptions_editing = {
            field: this.analyzeOptions_editing.field,
            metakey: this.analyzeOptions_editing.metakey,
            group: this.analyzeOptions_editing.group,
            period: {
                start: moment(slider.from, 'X').utc().startOf('day').format("X"),
                end: moment(slider.to, 'X').utc().endOf('day').format("X")
            }
        };
        this.periodChange(slider);
    };
    DonneesComponent.prototype.periodChange = function (slider) {
        this.picker.datePicker.setStartDate(moment(slider.from, 'X').utc().startOf('day'));
        this.picker.datePicker.setEndDate(moment(slider.to, 'X').utc().endOf('day'));
        this.activeBtnAnalyze();
    };
    DonneesComponent.prototype.applyPeriodDaterange = function (e) {
        this.analyzeOptions_editing = {
            field: this.analyzeOptions_editing.field,
            metakey: this.analyzeOptions_editing.metakey,
            group: this.analyzeOptions_editing.group,
            period: {
                start: this.period_daterange.start.utc().format("X"),
                end: this.period_daterange.end.utc().format("X")
            }
        };
        var slider = jQuery("#period_slider").data("ionRangeSlider");
        slider.update({
            from: this.analyzeOptions_editing.period.start,
            to: this.analyzeOptions_editing.period.end
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_daterangepicker__["DaterangePickerComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_daterangepicker__["DaterangePickerComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_daterangepicker__["DaterangePickerComponent"]) === 'function' && _a) || Object)
    ], DonneesComponent.prototype, "picker", void 0);
    DonneesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'donnees',
            template: __webpack_require__(855),
            providers: [__WEBPACK_IMPORTED_MODULE_2__analyze_service__["a" /* AnalyzeService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__analyze_service__["a" /* AnalyzeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__analyze_service__["a" /* AnalyzeService */]) === 'function' && _b) || Object])
    ], DonneesComponent);
    return DonneesComponent;
    var _a, _b;
}());
//# sourceMappingURL=donnees.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function PartageComponent(OptionService) {
        this.OptionService = OptionService;
        this.sharingPolicy = [];
        this.error = undefined;
        this.success = undefined;
        this.jQueryActivate = false;
    }
    PartageComponent.prototype.ngOnInit = function () {
        this.getSharingPermissions();
    };
    PartageComponent.prototype.getSharingPermissions = function () {
        var _this = this;
        this.error = undefined;
        this.OptionService.getSharingPermissions()
            .then(function (sharingPermissions) {
            _this.sharingPolicy = sharingPermissions;
        })
            .catch(function (e) {
            _this.error = "Erreur " + e.status + " : " + e.statusText;
        });
    };
    PartageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery("#level_slider").ionRangeSlider({
            type: "single",
            values: [
                "Aucun partage", "Minimun", "Moyen", "Tout partager", "Personnalisé"
            ],
            from: 0,
            grid: true,
            force_edges: true,
            onChange: function (slider) {
                _this.changeLevel(slider.from);
            },
            onStart: function (slider) {
                _this.changeLevel(slider.from);
            }
        });
    };
    PartageComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.jQueryActivate && jQuery('input').length > 1) {
            this.jQueryActivate = true;
            jQuery('input').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });
            jQuery('input').on('ifClicked', function (event) {
                _this.error = undefined;
                _this.success = undefined;
                _this.changeCheckboxState(event.target.id, event.target.checked);
                _this.changeLevel(4);
                var slider = jQuery("#level_slider").data("ionRangeSlider");
                slider.update({ from: 4 });
            });
            this.levelValue = this.getInitialLevel();
            this.setLevelDescription();
            var slider = jQuery("#level_slider").data("ionRangeSlider");
            slider.update({ from: this.levelValue });
            this.changeCheckboxesState("current", undefined);
        }
    };
    PartageComponent.prototype.getInitialLevel = function () {
        var humor = 0;
        var consuptionBill = 0;
        var consuptionBillTotal = 0;
        var bank = 0;
        var bankTotal = 0;
        for (var _i = 0, _a = this.sharingPolicy; _i < _a.length; _i++) {
            var cb = _a[_i];
            if (cb.label.toLowerCase() == "humeur") {
                humor += (cb.types[0].allowed) ? 1 : 0;
            }
            else if (cb.label.toLowerCase() == "consommation" || cb.label.toLowerCase() == "factures") {
                for (var _b = 0, _c = cb.types; _b < _c.length; _b++) {
                    var type = _c[_b];
                    consuptionBill += (type.allowed) ? 1 : 0;
                    consuptionBillTotal++;
                }
            }
            else {
                for (var _d = 0, _e = cb.types; _d < _e.length; _d++) {
                    var type = _e[_d];
                    bank += (type.allowed) ? 1 : 0;
                    bankTotal++;
                }
            }
        }
        if (humor == 0 && consuptionBill == 0 && bank == 0) {
            return 0;
        }
        if (humor > 0 && consuptionBill == consuptionBillTotal && bank == bankTotal) {
            return 3;
        }
        if (humor > 0 && consuptionBill == 0 && bank == 0) {
            return 1;
        }
        if (humor > 0 && consuptionBill == consuptionBillTotal && bank == 0) {
            return 2;
        }
        return 4;
    };
    PartageComponent.prototype.setLevelDescription = function () {
        switch (this.levelValue) {
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
    PartageComponent.prototype.changeLevel = function (value) {
        switch (value) {
            case 0:
                this.changeCheckboxesState("all", "uncheck");
                break;
            case 1:
                this.changeCheckboxesState("humeur", "check");
                this.changeCheckboxesState("consommation", "uncheck");
                this.changeCheckboxesState("factures", "uncheck");
                this.changeCheckboxesState("données bancaires", "uncheck");
                break;
            case 2:
                this.changeCheckboxesState("humeur", "check");
                this.changeCheckboxesState("consommation", "check");
                this.changeCheckboxesState("factures", "check");
                this.changeCheckboxesState("données bancaires", "uncheck");
                break;
            case 3:
                this.changeCheckboxesState("all", "check");
                break;
            default:
                break;
        }
        this.levelValue = value;
        this.setLevelDescription();
    };
    PartageComponent.prototype.changeCheckboxesState = function (section, checked) {
        var section_i = 0;
        var type_i = 0;
        if (section.toLowerCase() == "all") {
            for (var _i = 0, _a = this.sharingPolicy; _i < _a.length; _i++) {
                var cb = _a[_i];
                for (var _b = 0, _c = cb.types; _b < _c.length; _b++) {
                    var type = _c[_b];
                    jQuery('#' + type.key).iCheck(checked);
                    this.sharingPolicy[section_i].types[type_i].allowed = (checked != 'uncheck');
                    type_i++;
                }
                type_i = 0;
                section_i++;
            }
        }
        else if (section.toLowerCase() == "current") {
            for (var _d = 0, _e = this.sharingPolicy; _d < _e.length; _d++) {
                var cb = _e[_d];
                for (var _f = 0, _g = cb.types; _f < _g.length; _f++) {
                    var type = _g[_f];
                    jQuery('#' + type.key).iCheck(((this.sharingPolicy[section_i].types[type_i].allowed) ? 'check' : 'uncheck'));
                    type_i++;
                }
                type_i = 0;
                section_i++;
            }
        }
        else {
            // Recherche de l'emplacement de la section
            for (section_i = 0; section_i < this.sharingPolicy.length; section_i++) {
                if (this.sharingPolicy[section_i].label.toLowerCase() == section.toLowerCase()) {
                    break;
                }
            }
            // Mise à jour des checkboxes
            for (var _h = 0, _j = this.sharingPolicy[section_i].types; _h < _j.length; _h++) {
                var type = _j[_h];
                jQuery('#' + type.key).iCheck(checked);
                this.sharingPolicy[section_i].types[type_i].allowed = (checked != 'uncheck');
                type_i++;
            }
        }
    };
    PartageComponent.prototype.changeCheckboxState = function (id, checked) {
        var section_i = 0;
        var type_i = 0;
        // Recherche de l'emplacement de la section
        for (section_i = 0; section_i < this.sharingPolicy.length; section_i++) {
            for (var _i = 0, _a = this.sharingPolicy[section_i].types; _i < _a.length; _i++) {
                var type = _a[_i];
                if (type.key == id) {
                    this.sharingPolicy[section_i].types[type_i].allowed = (!checked);
                    break;
                }
                type_i++;
            }
            type_i = 0;
        }
    };
    PartageComponent.prototype.save = function () {
        var _this = this;
        this.error = undefined;
        this.success = undefined;
        this.OptionService.setSharingPermissions(this.sharingPolicy)
            .subscribe(function (data) {
            _this.success = "Politique de partage sauvegardée";
            return true;
        }, function (error) {
            _this.error = "Une erreur inconnue est survenue";
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    PartageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'partage',
            template: __webpack_require__(857),
            providers: [__WEBPACK_IMPORTED_MODULE_1__option_service__["a" /* OptionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__option_service__["a" /* OptionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__option_service__["a" /* OptionService */]) === 'function' && _a) || Object])
    ], PartageComponent);
    return PartageComponent;
    var _a;
}());
//# sourceMappingURL=partage.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function ProfilComponent(OptionService) {
        this.OptionService = OptionService;
        this.profile = {
            birthdate: undefined,
            gender: undefined,
            country: undefined,
            zip_code: undefined,
            city: undefined
        };
        this.error = undefined;
        this.success = undefined;
    }
    ProfilComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfilComponent.prototype.getProfile = function () {
        var _this = this;
        this.error = undefined;
        this.OptionService.getProfile()
            .then(function (profile) {
            _this.profile = profile;
            _this.profile.gender = (profile.gender == null) ? "null" : _this.profile.gender;
            _this.profile.country = (profile.country == null) ? "France" : _this.profile.country;
        })
            .catch(function (e) {
            _this.error = "Erreur " + e.status + " : " + e.statusText;
        });
    };
    ProfilComponent.prototype.save = function () {
        var _this = this;
        this.error = undefined;
        this.success = undefined;
        this.OptionService.setProfile(this.profile)
            .subscribe(function (data) {
            _this.success = "Profil sauvegardé";
            return true;
        }, function (error) {
            _this.error = "Une erreur inconnue est survenue";
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    ProfilComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profil',
            template: __webpack_require__(858),
            providers: [__WEBPACK_IMPORTED_MODULE_1__option_service__["a" /* OptionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__option_service__["a" /* OptionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__option_service__["a" /* OptionService */]) === 'function' && _a) || Object])
    ], ProfilComponent);
    return ProfilComponent;
    var _a;
}());
//# sourceMappingURL=profil.component.js.map

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 606;


/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(234);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableData; });
/* unused harmony export SharingPermissionsModel */
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
var SharingPermissionsModel = (function () {
    function SharingPermissionsModel() {
    }
    return SharingPermissionsModel;
}());
;
//# sourceMappingURL=analyze.availableData.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analyze_models__ = __webpack_require__(373);
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

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donnees_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partage_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aide_component__ = __webpack_require__(372);
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

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(234);
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
            template: __webpack_require__(854),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__donnees_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__donnees_traitement_component__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__analyze_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__option_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aide_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__partage_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profil_component__ = __webpack_require__(377);
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
                __WEBPACK_IMPORTED_MODULE_16__aide_component__["a" /* AideComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__donnees_component__["a" /* DonneesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__donnees_traitement_component__["a" /* DonneesTraitementComponent */],
                __WEBPACK_IMPORTED_MODULE_17__partage_component__["a" /* PartageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profil_component__["a" /* ProfilComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__["IonRangeSliderModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker__["Daterangepicker"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["c" /* TooltipModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__analyze_service__["a" /* AnalyzeService */],
                __WEBPACK_IMPORTED_MODULE_15__option_service__["a" /* OptionService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analyze_models__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
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
        this.aggregate = "count";
        this.labels = [];
        this.chartjsColors = [];
    }
    DonneesTraitementComponent.prototype.ngOnInit = function () {
        this.chartType = "doughnut";
        this.aggregate = "count";
    };
    DonneesTraitementComponent.prototype.ngOnChanges = function () {
        this.traiter();
    };
    DonneesTraitementComponent.prototype.aggregateChange = function (item) {
        this.aggregate = item;
        this.traiter();
    };
    DonneesTraitementComponent.prototype.getRandomColors = function (nb) {
        if (this.chartjsColors.length < 12) {
            this.chartjsColors = ["#FFA1B5", "#86C7F3", "#FFE199", "#F0F2F4", "#93D9D9", "#C0D6E1", "#7CDA87", "#FA9092", "#90D8D7", "#FED29D", "#BFC5D0", "#94979F"];
            if (nb - 12 > 0) {
                this.chartjsColors = this.chartjsColors.concat(randomColor({ luminosity: 'light', count: 38 }));
            }
        }
        else {
            if (nb > this.chartjsColors.length) {
                this.chartjsColors = this.chartjsColors.concat(randomColor({ luminosity: 'light', count: nb - this.chartjsColors.length }));
            }
        }
        return this.chartjsColors;
    };
    DonneesTraitementComponent.prototype.traiter = function () {
        this.labels = [];
        this.valuesForChartMe = [];
        this.valuesForChartAll = [];
        this.valuesForBarChart = [];
        var dataUser = [];
        var dataMoteur = [];
        var group = this.analyzeOptions.group;
        if (group.substr(0, 5) == "time(") {
            group = "time";
        }
        for (var i in this.donnees.engine.data) {
            var item = this.donnees.engine.data[i];
            dataMoteur.push(item[this.aggregate]);
            var label = item[group];
            if (this.labels.indexOf(label) === -1) {
                this.labels.push(label);
            }
        }
        ;
        this.valuesForBarChart.push({ data: dataMoteur, label: 'Autres utilisateurs' });
        this.valuesForChartAll = dataMoteur;
        var offsetForLabel = 0;
        for (var i in this.donnees.cozy.data) {
            var item = this.donnees.cozy.data[i];
            var label = item[group];
            while (this.labels.indexOf(label) != offsetForLabel) {
                dataUser.push(undefined);
                offsetForLabel++;
            }
            dataUser.push(item[this.aggregate]);
            offsetForLabel++;
        }
        ;
        this.valuesForBarChart.push({ data: dataUser, label: 'Moi' });
        this.valuesForChartMe = dataUser;
        this.labelsColors = [{ backgroundColor: this.getRandomColors(this.labels.length) }];
        this.refresh_charts();
    };
    DonneesTraitementComponent.prototype.refresh_charts = function () {
        if (this.ChartMe != undefined) {
            this.ChartMe.labels = this.labels;
            this.ChartMe.data = this.valuesForChartMe;
            this.ChartMe.ngOnChanges({});
        }
        if (this.ChartAll != undefined) {
            this.ChartAll.labels = this.labels;
            this.ChartAll.data = this.valuesForChartAll;
            this.ChartAll.ngOnChanges({});
        }
        if (this.BarChart != undefined) {
            this.BarChart.labels = this.labels;
            this.BarChart.data = this.valuesForBarChart;
            this.BarChart.ngOnChanges({});
        }
    };
    DonneesTraitementComponent.prototype.addSpaces = function (n) {
        var rx = /(\d+)(\d{3})/;
        return String(n).replace(/^\d+/, function (w) {
            while (rx.test(w)) {
                w = w.replace(rx, '$1 $2');
            }
            return w;
        });
    };
    DonneesTraitementComponent.prototype.toDecimal = function (value, decimals) {
        var newnumber = new Number(value + '').toFixed(parseInt(decimals));
        return parseFloat(newnumber);
    };
    DonneesTraitementComponent.prototype.toDecimalHtml = function (num, nbDecimal) {
        return this.addSpaces(this.toDecimal(num, nbDecimal));
    };
    DonneesTraitementComponent.prototype.toPercentHtml = function (val1, val2) {
        var decrease = val2 - val1;
        var result = this.toDecimal((decrease / val1) * 100, 2);
        if (Number(this.toDecimal(result, 0)) > 0) {
            return '<i class="green"><i class="fa fa-sort-asc"></i> ' + result + ' % </i>';
        }
        else if (Number(this.toDecimal(result, 0)) < 0) {
            return '<i class="red"><i class="fa fa-sort-desc"></i> ' + result + ' % </i>';
        }
        else {
            return '<i style="color:#54b5d5;"><i class="fa fa-sort"></i> ' + result + ' % </i>';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__analyze_models__["a" /* AnalyzeModel */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__analyze_models__["a" /* AnalyzeModel */]) === 'function' && _a) || Object)
    ], DonneesTraitementComponent.prototype, "donnees", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__analyze_models__["b" /* AnalyzeOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__analyze_models__["b" /* AnalyzeOptions */]) === 'function' && _b) || Object)
    ], DonneesTraitementComponent.prototype, "analyzeOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], DonneesTraitementComponent.prototype, "analyzeStarted", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === 'function' && _c) || Object)
    ], DonneesTraitementComponent.prototype, "ChartMe", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === 'function' && _d) || Object)
    ], DonneesTraitementComponent.prototype, "ChartAll", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === 'function' && _e) || Object)
    ], DonneesTraitementComponent.prototype, "BarChart", void 0);
    DonneesTraitementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'donnees-traitement',
            template: __webpack_require__(856)
        }), 
        __metadata('design:paramtypes', [])
    ], DonneesTraitementComponent);
    return DonneesTraitementComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=donnees.traitement.component.js.map

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "h1 {\r\n\tfont-family: Verdana, Arial, Serif;\r\n\tfont-size: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 399,
	"./af.js": 399,
	"./ar": 406,
	"./ar-dz": 400,
	"./ar-dz.js": 400,
	"./ar-kw": 401,
	"./ar-kw.js": 401,
	"./ar-ly": 402,
	"./ar-ly.js": 402,
	"./ar-ma": 403,
	"./ar-ma.js": 403,
	"./ar-sa": 404,
	"./ar-sa.js": 404,
	"./ar-tn": 405,
	"./ar-tn.js": 405,
	"./ar.js": 406,
	"./az": 407,
	"./az.js": 407,
	"./be": 408,
	"./be.js": 408,
	"./bg": 409,
	"./bg.js": 409,
	"./bn": 410,
	"./bn.js": 410,
	"./bo": 411,
	"./bo.js": 411,
	"./br": 412,
	"./br.js": 412,
	"./bs": 413,
	"./bs.js": 413,
	"./ca": 414,
	"./ca.js": 414,
	"./cs": 415,
	"./cs.js": 415,
	"./cv": 416,
	"./cv.js": 416,
	"./cy": 417,
	"./cy.js": 417,
	"./da": 418,
	"./da.js": 418,
	"./de": 421,
	"./de-at": 419,
	"./de-at.js": 419,
	"./de-ch": 420,
	"./de-ch.js": 420,
	"./de.js": 421,
	"./dv": 422,
	"./dv.js": 422,
	"./el": 423,
	"./el.js": 423,
	"./en-au": 424,
	"./en-au.js": 424,
	"./en-ca": 425,
	"./en-ca.js": 425,
	"./en-gb": 426,
	"./en-gb.js": 426,
	"./en-ie": 427,
	"./en-ie.js": 427,
	"./en-nz": 428,
	"./en-nz.js": 428,
	"./eo": 429,
	"./eo.js": 429,
	"./es": 431,
	"./es-do": 430,
	"./es-do.js": 430,
	"./es.js": 431,
	"./et": 432,
	"./et.js": 432,
	"./eu": 433,
	"./eu.js": 433,
	"./fa": 434,
	"./fa.js": 434,
	"./fi": 435,
	"./fi.js": 435,
	"./fo": 436,
	"./fo.js": 436,
	"./fr": 439,
	"./fr-ca": 437,
	"./fr-ca.js": 437,
	"./fr-ch": 438,
	"./fr-ch.js": 438,
	"./fr.js": 439,
	"./fy": 440,
	"./fy.js": 440,
	"./gd": 441,
	"./gd.js": 441,
	"./gl": 442,
	"./gl.js": 442,
	"./gom-latn": 443,
	"./gom-latn.js": 443,
	"./he": 444,
	"./he.js": 444,
	"./hi": 445,
	"./hi.js": 445,
	"./hr": 446,
	"./hr.js": 446,
	"./hu": 447,
	"./hu.js": 447,
	"./hy-am": 448,
	"./hy-am.js": 448,
	"./id": 449,
	"./id.js": 449,
	"./is": 450,
	"./is.js": 450,
	"./it": 451,
	"./it.js": 451,
	"./ja": 452,
	"./ja.js": 452,
	"./jv": 453,
	"./jv.js": 453,
	"./ka": 454,
	"./ka.js": 454,
	"./kk": 455,
	"./kk.js": 455,
	"./km": 456,
	"./km.js": 456,
	"./kn": 457,
	"./kn.js": 457,
	"./ko": 458,
	"./ko.js": 458,
	"./ky": 459,
	"./ky.js": 459,
	"./lb": 460,
	"./lb.js": 460,
	"./lo": 461,
	"./lo.js": 461,
	"./lt": 462,
	"./lt.js": 462,
	"./lv": 463,
	"./lv.js": 463,
	"./me": 464,
	"./me.js": 464,
	"./mi": 465,
	"./mi.js": 465,
	"./mk": 466,
	"./mk.js": 466,
	"./ml": 467,
	"./ml.js": 467,
	"./mr": 468,
	"./mr.js": 468,
	"./ms": 470,
	"./ms-my": 469,
	"./ms-my.js": 469,
	"./ms.js": 470,
	"./my": 471,
	"./my.js": 471,
	"./nb": 472,
	"./nb.js": 472,
	"./ne": 473,
	"./ne.js": 473,
	"./nl": 475,
	"./nl-be": 474,
	"./nl-be.js": 474,
	"./nl.js": 475,
	"./nn": 476,
	"./nn.js": 476,
	"./pa-in": 477,
	"./pa-in.js": 477,
	"./pl": 478,
	"./pl.js": 478,
	"./pt": 480,
	"./pt-br": 479,
	"./pt-br.js": 479,
	"./pt.js": 480,
	"./ro": 481,
	"./ro.js": 481,
	"./ru": 482,
	"./ru.js": 482,
	"./sd": 483,
	"./sd.js": 483,
	"./se": 484,
	"./se.js": 484,
	"./si": 485,
	"./si.js": 485,
	"./sk": 486,
	"./sk.js": 486,
	"./sl": 487,
	"./sl.js": 487,
	"./sq": 488,
	"./sq.js": 488,
	"./sr": 490,
	"./sr-cyrl": 489,
	"./sr-cyrl.js": 489,
	"./sr.js": 490,
	"./ss": 491,
	"./ss.js": 491,
	"./sv": 492,
	"./sv.js": 492,
	"./sw": 493,
	"./sw.js": 493,
	"./ta": 494,
	"./ta.js": 494,
	"./te": 495,
	"./te.js": 495,
	"./tet": 496,
	"./tet.js": 496,
	"./th": 497,
	"./th.js": 497,
	"./tl-ph": 498,
	"./tl-ph.js": 498,
	"./tlh": 499,
	"./tlh.js": 499,
	"./tr": 500,
	"./tr.js": 500,
	"./tzl": 501,
	"./tzl.js": 501,
	"./tzm": 503,
	"./tzm-latn": 502,
	"./tzm-latn.js": 502,
	"./tzm.js": 503,
	"./uk": 504,
	"./uk.js": 504,
	"./ur": 505,
	"./ur.js": 505,
	"./uz": 507,
	"./uz-latn": 506,
	"./uz-latn.js": 506,
	"./uz.js": 507,
	"./vi": 508,
	"./vi.js": 508,
	"./x-pseudo": 509,
	"./x-pseudo.js": 509,
	"./yo": 510,
	"./yo.js": 510,
	"./zh-cn": 511,
	"./zh-cn.js": 511,
	"./zh-hk": 512,
	"./zh-hk.js": 512,
	"./zh-tw": 513,
	"./zh-tw.js": 513
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
webpackContext.id = 816;


/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "  <div class=\"\">\r\n\t<div class=\"page-title\">\r\n\t  <div class=\"title_left\">\r\n\t\t<h3>Aide / À propos</h3>\r\n\t  </div>\r\n\t</div>\r\n\r\n\t<div class=\"clearfix\"></div>\r\n\r\n\t<div class=\"row\">\r\n\t  <div class=\"col-md-6\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t  <div class=\"x_title\">\r\n\t\t\t<h2>Aide</h2>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t  </div>\r\n\t\t  <div class=\"x_content\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<p>Un manuel utilisateur est disponible au format PDF</p>\r\n\t\t\t\t<a href=\"https://www.dropbox.com/s/i5tupdicqt48j1j/PersoCloud%20-%20Manuel%20d%27utilisation%20du%20logiciel.pdf?dl=1\"><i class=\"fa fa-download fa-4x\" aria-hidden=\"true\"></i></a>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"x_panel\">\r\n\t\t  <div class=\"x_title\">\r\n\t\t\t<h2>Licence</h2>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t  </div>\r\n\t\t  <div class=\"x_content\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<p>L'interface graphique de l'application PersoCloud est basée sur le template Gentelella développé sous licence MIT et maintenu par <a href=\"https://colorlib.com/\">Colorlib</a> et Aigars Silkalns, disponible à cette addresse : <a href=\"https://github.com/puikinsh/gentelella\">https://github.com/puikinsh/gentelella</a></p>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t  </div>\t\r\n\t\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"x_panel\">\r\n\t\t\t  <div class=\"x_title\">\r\n\t\t\t\t<h2>À propos de l'application PersoCloud</h2>\r\n\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"x_content\">\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<p>L'application PersoCloud est une application développée dans le cadre des projets de l'ISTIC du Master 1 informatique à Rennes lors de l'année universitaire 2016-2017. Notre groupe était constitué de huit personnes. Pour toutes demandes ou informations, vous pouvez nous contacter par mail en cliquant sur le nom d'un des membres du groupe, ou bien sur <a href=\"mailto:aurelien.anne@etudiant.univ-rennes1.fr,mounir.bouyamine@etudiant.univ-rennes1.fr,minh-anh.dang@etudiant.univ-rennes1.fr,lorenzo.mazzocchi@etudiant.univ-rennes1.fr,naima.sadoun@etudiant.univ-rennes1.fr,kevin.salmon@etudiant.univ-rennes1.fr,adou.soukpa@etudiant.univ-rennes1.fr,nadia.zerrouk@etudiant.univ-rennes1.fr\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> cette icone</a> pour contacter le groupe.</p>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:aurelien.anne@etudiant.univ-rennes1.fr\">ANNE Aurélien</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:mounir.bouyamine@etudiant.univ-rennes1.fr\">BOUYAMINE Mounir</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:minh-anh.dang@etudiant.univ-rennes1.fr\">DANG Minh-Anh</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:lorenzo.mazzocchi@etudiant.univ-rennes1.fr\">MAZZOCCHI Lorenzo</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:naima.sadoun@etudiant.univ-rennes1.fr\">SADOUN Naïma</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:kevin.salmon@etudiant.univ-rennes1.fr\">SALMON Kevin</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:adou.soukpa@etudiant.univ-rennes1.fr\">SOUKPA Adou</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"mailto:nadia.zerrouk@etudiant.univ-rennes1.fr\">ZERROUK Nadia</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t  </div>\r\n  </div>"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\r\n  <div class=\"main_container\">\r\n\t<div class=\"col-md-3 left_col\">\r\n\t  <div class=\"left_col scroll-view\">\r\n\t\t<div class=\"navbar nav_title\" style=\"border: 0;\">\r\n\t\t  <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-pie-chart\"></i> <span>PersoCloud</span></a>\r\n\t\t</div>\r\n\t\t<div class=\"clearfix\"></div>\r\n\t\t<br />\r\n\t   <!-- sidebar menu -->\r\n\t\t<div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r\n\t\t  <div class=\"menu_section\">\r\n\t\t\t<h3>Général</h3>\r\n\t\t\t<ul class=\"nav side-menu\">\r\n\t\t\t  <li><a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-home\"></i> Accueil</a></li>\r\n\t\t\t  <li><a routerLink=\"/profil\" routerLinkActive=\"active\"><i class=\"fa fa-user\"></i> Votre profil</a></li>\r\n\t\t\t  <li><a routerLink=\"/partage\" routerLinkActive=\"active\"><i class=\"fa fa-share-alt\"></i> Votre politique de partage</a></li>\t\t\t  \r\n\t\t\t  <li><a routerLink=\"/aide\" routerLinkActive=\"active\"><i class=\"fa fa-info-circle\"></i> Aide / À propos</a></li>\r\n\t\t\t</ul>\r\n\t\t  </div>\r\n\t\t  <div *ngIf=\"envAnalyzeService == 'dummy'\" class=\"menu_section\">\r\n\t\t\t<ul class=\"nav side-menu\">\r\n\t\t\t  <li><a routerLink=\"#\" routerLinkActive=\"disabled\">\r\n\t\t\t\t/!\\ Le dummy service ne renvoit plus le bon format de donnée. Il faut compiler la partie cliente avec l'option dev_api.\r\n\t\t\t  </a></li>\t\t\t  \r\n\t\t\t</ul>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<!-- sidebar menu -->\r\n\t  </div>\r\n\t</div>\r\n\t\r\n\t<!-- page content -->\r\n\t<div class=\"right_col\" role=\"main\">\r\n\t\t<div class=\"\">\r\n\t\t\t<div> \r\n\t\t\t\t<!-- <donnees></donnees> -->\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<!-- page content -->\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\r\n  <div class=\"title_left\">\r\n\t<h3>Analyses</h3>\r\n  </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_title\">\r\n\t\t\t  <h2>Moteur de recherche</h2>\r\n\t\t\t  <div class=\"clearfix\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x_content\">\r\n\t\t\t\t<form class=\"form-horizontal form-label-left\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 form-group\">\r\n\t\t\t\t\t\t\t<label for=\"field\">Type de donnée</label>\r\n\t\t\t\t\t\t\t<select (change)=\"fieldChange($event.target.value)\" class=\"form-control\" id=\"field\">\r\n\t\t\t\t\t\t\t\t<!-- <option value=\"\" disabled selected>Type de donnée</option> -->\r\n\t\t\t\t\t\t\t\t<optgroup *ngFor=\"let availableField of availableFields\" label=\"{{ availableField.groupLabel }}\">\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of availableField.items\" value=\"{{ item.field }}\">{{ item.label }}</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 form-group\">\r\n\t\t\t\t\t\t\t<label for=\"group\">Regrouper les données par</label>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<select (change)=\"groupChange($event.target.value)\" class=\"form-control\" id=\"group\">\r\n\t\t\t\t\t\t\t\t<!--<option value=\"\" selected>Regrouper par</option>-->\r\n\t\t\t\t\t\t\t\t<option value=\"time\">Temps</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of availableGroupKeys[analyzeOptions_editing.field]\" value=\"{{ item.key }}\">{{ item.label }}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"analyzeOptions_editing?.group == 'time'\" class=\"col-md-3 col-sm-3 col-xs-12 form-group\"> \r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\t\r\n\t\t\t\t\t\t\t\t\t<label for=\"groupTimeValue\">Précision</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"groupTimeValue\" (keyup)=\"groupTimeValueChange($event.target.value)\" (change)=\"groupTimeValueChange($event.target.value)\" min=\"1\" max=\"365\" value=\"1\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t\t\t\t\t\t<select (change)=\"groupTimeDurationChange($event.target.value)\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"h\">heure</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"d\">jour</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"w\" selected>semaine</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"y\">année</option>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--<div class=\"col-md-3 col-sm-3 col-xs-12 form-group\"> \r\n\t\t\t\t\t\t\t<select (change)=\"metakeyChange($event.target.value)\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"analyzeOptions_editing?.field == undefined\" value=\"\" disabled selected>Metakey</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of availableMetaKeys[analyzeOptions_editing.field]\" value=\"{{ item.key }}\">{{ item.label }}</option>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>-->\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 form-group\" style=\"height:70px;\">\r\n\t\t\t\t\t\t\t<div style=\"width: 60px; height: 70px;\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\" style=\"text-align:right; width: 40px; margin-left: auto; margin-right: auto; position: relative; top: 50%; transform: translateY(-50%);\">\r\n\t\t\t\t\t\t\t\t\tPériode<br>\r\n\t\t\t\t\t\t\t\t\t<small><abbr title=\"Période au temps universel UTC\">UTC</abbr></small>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div style=\"width: 92%; position: relative; top: -70px; margin-left: 70px;\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"period_slider\" name=\"period_slider\" value=\"\" />\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-8 col-xs-12 form-group\">\r\n\t\t\t\t\t\t\t<div class=\"control-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input-prepend input-group\" style=\"margin-left:70px;\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"add-on input-group-addon\"><i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"period_daterangeInput\" name=\"period_daterangeInput\" daterangepicker [options]=\"period_daterange_options\" (selected)=\"selectedPeriodDaterange($event)\" (applyDaterangepicker)=\"applyPeriodDaterange($event)\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12 form-group\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"btnAnalyzeDisabled\" (click)=getAnalyze() tooltip=\"{{ btnAnalyzeDescription }}\" placement=\"right\">{{ btnAnalyzeValue }}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"serviceError != undefined\" class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\t\t<alert type=\"error\" dismissible=\"true\">{{ serviceError }}</alert>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"analyzeResults\" class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\t\t\t\r\n\t\t\t<donnees-traitement [donnees]=\"analyzeResults\" [analyzeOptions]=\"analyzeOptions\" [analyzeStarted]=\"analyzeStarted\"></donnees-traitement>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal form-label-left\" id=\"donneesTraitement\">\r\n\t<div class=\"form-group\">\r\n\t\t<label class=\"control-label col-sm-1 col-xs-12\">Diagramme</label>\r\n\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<a *ngIf=\"valuesForChartMe || valuesForChartAll\" href=\"#donneesTraitement\" class=\"btn btn-primary\" [(ngModel)]=\"chartType\" btnRadio=\"doughnut\">Donut</a>\r\n\t\t\t\t<a *ngIf=\"valuesForChartMe || valuesForChartAll\" href=\"#donneesTraitement\" class=\"btn btn-primary\" [(ngModel)]=\"chartType\" btnRadio=\"pie\">Circulaire</a>\r\n\t\t\t\t<a *ngIf=\"valuesForChartMe || valuesForChartAll\" href=\"#donneesTraitement\" class=\"btn btn-primary\" [(ngModel)]=\"chartType\" btnRadio=\"polarArea\">Polar Chart</a>\r\n\t\t\t\t<a *ngIf=\"valuesForBarChart\" href=\"#donneesTraitement\" class=\"btn btn-warning\" [(ngModel)]=\"chartType\" btnRadio=\"bar\">Barres</a>\r\n\t\t\t\t<a *ngIf=\"valuesForBarChart\" href=\"#donneesTraitement\" class=\"btn btn-warning\" [(ngModel)]=\"chartType\" btnRadio=\"radar\">Radar</a>\r\n\t\t\t\t<a *ngIf=\"valuesForBarChart\" href=\"#donneesTraitement\" class=\"btn btn-warning\" [(ngModel)]=\"chartType\" btnRadio=\"line\">Lignes</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<label class=\"control-label col-sm-1 col-xs-12\">Agrégat</label>\r\n\t\t<div class=\"col-sm-2 col-xs-12\">\r\n\t\t\t<select [(ngModel)]=\"aggregate\"(change)=\"aggregateChange($event.target.value)\" class=\"form-control\">\r\n\t\t\t\t<option value=\"count\">Nombre</option>\r\n\t\t\t\t<option value=\"mean\">Moyenne</option>\t\t\t\t\t\t\t\t\r\n\t\t\t\t<option value=\"sum\">Somme</option>\r\n\t\t\t\t<option value=\"min\">Minimun</option>\r\n\t\t\t\t<option value=\"max\">Maximun</option>\r\n\t\t\t\t<option value=\"median\">Médiane</option>\r\n\t\t\t\t<option value=\"stddev\">Écart type</option>\r\n\t\t\t\t<option value=\"first\">Premier élément</option>\r\n\t\t\t\t<option value=\"last\">Dernier élément</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n</div>\t\t\t\t\t\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_content\">\t\r\n\t\t\t\t<div *ngIf=\"!analyzeStarted\" class=\"row\">\r\n\t\t\t\t\t<div *ngIf=\"chartType=='doughnut'||chartType=='pie'||chartType=='polarArea'\"  class=\"col-md-6 col-sm-6 col-xs-12\">\t\r\n\t\t\t\t\t\t<h2 style=\"text-align:center;\">Moi</h2>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-12\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%;\">\r\n\t\t\t\t\t\t\t\t\t<canvas baseChart #ChartMe\r\n\t\t\t\t\t\t\t\t\t\t[data]=\"valuesForChartMe\"\r\n\t\t\t\t\t\t\t\t\t\t[labels]=\"labels\"\r\n\t\t\t\t\t\t\t\t\t\t[colors]=\"labelsColors\"\r\n\t\t\t\t\t\t\t\t\t\t[chartType]=\"chartType\"></canvas>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"chartType=='doughnut'||chartType=='pie'||chartType=='polarArea'\" class=\"col-md-6 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\t<h2 style=\"text-align:center;\">Autres utilisateurs</h2>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-12\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%;\">\r\n\t\t\t\t\t\t\t\t\t<canvas baseChart #ChartAll\r\n\t\t\t\t\t\t\t\t\t\t[data]=\"valuesForChartAll\"\r\n\t\t\t\t\t\t\t\t\t\t[labels]=\"labels\"\r\n\t\t\t\t\t\t\t\t\t\t[colors]=\"labelsColors\"\r\n\t\t\t\t\t\t\t\t\t\t[chartType]=\"chartType\"></canvas>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"chartType=='bar'||chartType=='radar'||chartType=='line'\"  class=\"col-md-12 col-xs-12\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-12\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div style=\"display:block; margin-left: auto; margin-right: auto; width:100%\">\r\n\t\t\t\t\t\t\t\t\t<canvas baseChart #BarChart\r\n\t\t\t\t\t\t\t\t\t\t[datasets]=\"valuesForBarChart\"\r\n\t\t\t\t\t\t\t\t\t\t[labels]=\"labels\"\r\n\t\t\t\t\t\t\t\t\t\t[options]=\"{ scaleShowVerticalLines: false, responsive: true }\"\r\n\t\t\t\t\t\t\t\t\t\t[chartType]=\"chartType\"></canvas>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div *ngIf=\"!analyzeStarted\" class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">Statistiques sur les données</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t  <thead>\r\n                        <tr>\r\n                          <th>Agrégat</th>\r\n                          <th>Statistiques sur mes données</th>\r\n                          <th>Statistiques sur les données des utilisateurs</th>\r\n                          <th>Tendance</th>\r\n                        </tr>\r\n                      </thead>\r\n\t\t\t\t\t  <tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Nombre</th>\r\n\t\t\t\t\t\t  <td>{{donnees.cozy.meta.count}}</td>\r\n\t\t\t\t\t\t  <td>{{donnees.engine.meta.count}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.count, donnees.cozy.meta.count)\"></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Moyenne</th>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.cozy.meta.mean, 3)}}</td>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.engine.meta.mean, 3)}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.mean, donnees.cozy.meta.mean)\"></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Somme</th>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.cozy.meta.sum, 3)}}</td>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.engine.meta.sum, 3)}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.sum, donnees.cozy.meta.sum)\"></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Minimun</th>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.cozy.meta.min, 3)}}</td>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.engine.meta.min, 3)}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.min, donnees.cozy.meta.min)\"></td>\r\n\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Maximun</th>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.cozy.meta.max, 3)}}</td>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.engine.meta.max, 3)}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.max, donnees.cozy.meta.max)\"></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Ecart type</th>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.cozy.meta.stddev, 3)}}</td>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.engine.meta.stddev, 3)}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.stddev, donnees.cozy.meta.stddev)\"></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Premier élement</th>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.cozy.meta.first, 3)}}</td>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.engine.meta.first, 3)}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.first, donnees.cozy.meta.first)\"></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t  <th scope=\"row\">Dernier élément</th>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.cozy.meta.last, 3)}}</td>\r\n\t\t\t\t\t\t  <td>{{toDecimalHtml(donnees.engine.meta.last, 3)}}</td>\r\n\t\t\t\t\t\t  <td [innerHTML]=\"toPercentHtml(donnees.engine.meta.last, donnees.cozy.meta.last)\"></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t  </tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\r\n  <h3>Votre politique de partage de données</h3>\r\n</div>\r\n<div class=\"clearfix\"></div>\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_title\">\r\n\t\t\t  <h2>Autorisations de partage de données</h2>\r\n\t\t\t  <div class=\"clearfix\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x_content\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\" ></div>\r\n\t\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-12\" style=\"height:70px;\">\r\n\t\t\t\t\t\t<div style=\"width: 120px; height: 70px; text-align: right;\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" style=\"position: relative; top: 50%; transform: translateY(-50%);\">Niveau de partage</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div style=\"position: relative; top: -70px; margin-left: 140px;\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"level_slider\" name=\"level_slider\" value=\"\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\" ></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" style=\"margin-top: 10px; text-align:justify;\">\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\"></div>\r\n\t\t\t\t\t<div id=\"level_details\" class=\"col-md-8 col-sm-8 col-xs-12\" >\r\n\t\t\t\t\t\t{{levelDescription}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-12\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" style=\"margin-top: 10px;\">\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\t\t\t\t\t\r\n\t\t\t\t\t\t<div *ngFor=\"let cbSection of sharingPolicy; let section_i = index;\">\r\n\t\t\t\t\t\t\t<span class=\"section\">{{cbSection.label}}</span>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div *ngFor=\"let type of cbSection.types; let type_i = index;\" class=\"col-sm-3 col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"{{type.key}}\"> {{type.label}}</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ln_solid\"></div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-offset-3\">\r\n\t\t\t\t\t\t<button type=\"submit\" (click)=\"save()\" class=\"btn btn-success\">Enregistrer</button>\r\n\t\t\t\t\t\t<div *ngIf=\"error != undefined || success != undefined\" style=\"margin-left:110px;margin-top: -30px; margin-bottom:11px;\">\r\n\t\t\t\t\t\t\t<i *ngIf=\"error != undefined\" class=\"red\">{{ error }}</i>\r\n\t\t\t\t\t\t\t<i *ngIf=\"success != undefined\" class=\"green\">{{ success }}</i>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\r\n  </div>\r\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\r\n  <div class=\"title_left\">\r\n\t<h3>Votre profil</h3>\r\n  </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\t\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"x_panel\">\r\n\t\t\t<div class=\"x_title\">\r\n\t\t\t  <h2>Informations personnelles</h2>\r\n\t\t\t  <div class=\"clearfix\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x_content\">\r\n\t\t\t<form class=\"form-horizontal form-label-left\" novalidate>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-3\">Date de naissance</label>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"profile[birthdate]\" [ngModelOptions]=\"{standalone: true}\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item form-group\" style=\"margin-bottom:15px;\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Genre</label>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary active\" [(ngModel)]=\"profile['gender']\" [ngModelOptions]=\"{standalone: true}\" btnRadio=\"null\">Non précisé</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"profile['gender']\" [ngModelOptions]=\"{standalone: true}\"  btnRadio=\"female\">Femme</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"profile['gender']\" [ngModelOptions]=\"{standalone: true}\"  btnRadio=\"male\">Homme</label>\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"profile['gender']\" [ngModelOptions]=\"{standalone: true}\"  btnRadio=\"other\">Autre</label>\t\t\t\t\t\t  \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item form-group\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Pays</label>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t  <select class=\"form-control\" [(ngModel)]=\"profile['country']\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t<option value=\"Afghanistan\">Afghanistan </option>\r\n\t\t\t\t\t\t<option value=\"Afrique_Centrale\">Afrique Centrale </option>\r\n\t\t\t\t\t\t<option value=\"Afrique_du_sud\">Afrique du Sud </option>\r\n\t\t\t\t\t\t<option value=\"Albanie\">Albanie </option>\r\n\t\t\t\t\t\t<option value=\"Algerie\">Algerie </option>\r\n\t\t\t\t\t\t<option value=\"Allemagne\">Allemagne </option>\r\n\t\t\t\t\t\t<option value=\"Andorre\">Andorre </option>\r\n\t\t\t\t\t\t<option value=\"Angola\">Angola </option>\r\n\t\t\t\t\t\t<option value=\"Anguilla\">Anguilla </option>\r\n\t\t\t\t\t\t<option value=\"Arabie_Saoudite\">Arabie Saoudite</option>\r\n\t\t\t\t\t\t<option value=\"Argentine\">Argentine </option>\r\n\t\t\t\t\t\t<option value=\"Armenie\">Armenie </option>\r\n\t\t\t\t\t\t<option value=\"Australie\">Australie </option>\r\n\t\t\t\t\t\t<option value=\"Autriche\">Autriche </option>\r\n\t\t\t\t\t\t<option value=\"Azerbaidjan\">Azerbaidjan </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Bahamas\">Bahamas </option>\r\n\t\t\t\t\t\t<option value=\"Bangladesh\">Bangladesh </option>\r\n\t\t\t\t\t\t<option value=\"Barbade\">Barbade </option>\r\n\t\t\t\t\t\t<option value=\"Bahrein\">Bahrein </option>\r\n\t\t\t\t\t\t<option value=\"Belgique\">Belgique </option>\r\n\t\t\t\t\t\t<option value=\"Belize\">Belize </option>\r\n\t\t\t\t\t\t<option value=\"Benin\">Benin </option>\r\n\t\t\t\t\t\t<option value=\"Bermudes\">Bermudes </option>\r\n\t\t\t\t\t\t<option value=\"Bielorussie\">Bielorussie </option>\r\n\t\t\t\t\t\t<option value=\"Bolivie\">Bolivie </option>\r\n\t\t\t\t\t\t<option value=\"Botswana\">Botswana </option>\r\n\t\t\t\t\t\t<option value=\"Bhoutan\">Bhoutan </option>\r\n\t\t\t\t\t\t<option value=\"Boznie_Herzegovine\">Boznie Herzegovine </option>\r\n\t\t\t\t\t\t<option value=\"Bresil\">Bresil </option>\r\n\t\t\t\t\t\t<option value=\"Brunei\">Brunei </option>\r\n\t\t\t\t\t\t<option value=\"Bulgarie\">Bulgarie </option>\r\n\t\t\t\t\t\t<option value=\"Burkina_Faso\">Burkina_Faso </option>\r\n\t\t\t\t\t\t<option value=\"Burundi\">Burundi </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Caiman\">Caiman </option>\r\n\t\t\t\t\t\t<option value=\"Cambodge\">Cambodge </option>\r\n\t\t\t\t\t\t<option value=\"Cameroun\">Cameroun </option>\r\n\t\t\t\t\t\t<option value=\"Canada\">Canada </option>\r\n\t\t\t\t\t\t<option value=\"Canaries\">Canaries </option>\r\n\t\t\t\t\t\t<option value=\"Cap_vert\">Cap Vert </option>\r\n\t\t\t\t\t\t<option value=\"Chili\">Chili </option>\r\n\t\t\t\t\t\t<option value=\"Chine\">Chine </option>\r\n\t\t\t\t\t\t<option value=\"Chypre\">Chypre </option>\r\n\t\t\t\t\t\t<option value=\"Colombie\">Colombie </option>\r\n\t\t\t\t\t\t<option value=\"Comores\">Colombie </option>\r\n\t\t\t\t\t\t<option value=\"Congo\">Congo </option>\r\n\t\t\t\t\t\t<option value=\"Congo_democratique\">Congo democratique </option>\r\n\t\t\t\t\t\t<option value=\"Cook\">Cook </option>\r\n\t\t\t\t\t\t<option value=\"Coree_du_Nord\">Coree du Nord </option>\r\n\t\t\t\t\t\t<option value=\"Coree_du_Sud\">Coree du Sud </option>\r\n\t\t\t\t\t\t<option value=\"Costa_Rica\">Costa Rica </option>\r\n\t\t\t\t\t\t<option value=\"Cote_d_Ivoire\">Côte d'Ivoire </option>\r\n\t\t\t\t\t\t<option value=\"Croatie\">Croatie </option>\r\n\t\t\t\t\t\t<option value=\"Cuba\">Cuba </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Danemark\">Danemark </option>\r\n\t\t\t\t\t\t<option value=\"Djibouti\">Djibouti </option>\r\n\t\t\t\t\t\t<option value=\"Dominique\">Dominique </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Egypte\">Egypte </option>\r\n\t\t\t\t\t\t<option value=\"Emirats_Arabes_Unis\">Emirats Arabes Unis </option>\r\n\t\t\t\t\t\t<option value=\"Equateur\">Equateur </option>\r\n\t\t\t\t\t\t<option value=\"Erythree\">Erythree </option>\r\n\t\t\t\t\t\t<option value=\"Espagne\">Espagne </option>\r\n\t\t\t\t\t\t<option value=\"Estonie\">Estonie </option>\r\n\t\t\t\t\t\t<option value=\"Etats_Unis\">Etats Unis </option>\r\n\t\t\t\t\t\t<option value=\"Ethiopie\">Ethiopie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Falkland\">Falkland </option>\r\n\t\t\t\t\t\t<option value=\"Feroe\">Feroe </option>\r\n\t\t\t\t\t\t<option value=\"Fidji\">Fidji </option>\r\n\t\t\t\t\t\t<option value=\"Finlande\">Finlande </option>\r\n\t\t\t\t\t\t<option value=\"France\">France </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Gabon\">Gabon </option>\r\n\t\t\t\t\t\t<option value=\"Gambie\">Gambie </option>\r\n\t\t\t\t\t\t<option value=\"Georgie\">Georgie </option>\r\n\t\t\t\t\t\t<option value=\"Ghana\">Ghana </option>\r\n\t\t\t\t\t\t<option value=\"Gibraltar\">Gibraltar </option>\r\n\t\t\t\t\t\t<option value=\"Grece\">Grece </option>\r\n\t\t\t\t\t\t<option value=\"Grenade\">Grenade </option>\r\n\t\t\t\t\t\t<option value=\"Groenland\">Groenland </option>\r\n\t\t\t\t\t\t<option value=\"Guadeloupe\">Guadeloupe </option>\r\n\t\t\t\t\t\t<option value=\"Guam\">Guam </option>\r\n\t\t\t\t\t\t<option value=\"Guatemala\">Guatemala</option>\r\n\t\t\t\t\t\t<option value=\"Guernesey\">Guernesey </option>\r\n\t\t\t\t\t\t<option value=\"Guinee\">Guinee </option>\r\n\t\t\t\t\t\t<option value=\"Guinee_Bissau\">Guinee_Bissau </option>\r\n\t\t\t\t\t\t<option value=\"Guinee equatoriale\">Guinee Equatoriale </option>\r\n\t\t\t\t\t\t<option value=\"Guyana\">Guyana </option>\r\n\t\t\t\t\t\t<option value=\"Guyane_Francaise \">Guyane Francaise </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Haiti\">Haiti </option>\r\n\t\t\t\t\t\t<option value=\"Hawaii\">Hawaii </option>\r\n\t\t\t\t\t\t<option value=\"Honduras\">Honduras </option>\r\n\t\t\t\t\t\t<option value=\"Hong_Kong\">Hong_Kong </option>\r\n\t\t\t\t\t\t<option value=\"Hongrie\">Hongrie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Inde\">Inde </option>\r\n\t\t\t\t\t\t<option value=\"Indonesie\">Indonesie </option>\r\n\t\t\t\t\t\t<option value=\"Iran\">Iran </option>\r\n\t\t\t\t\t\t<option value=\"Iraq\">Iraq </option>\r\n\t\t\t\t\t\t<option value=\"Irlande\">Irlande </option>\r\n\t\t\t\t\t\t<option value=\"Islande\">Islande </option>\r\n\t\t\t\t\t\t<option value=\"Israel\">Israel </option>\r\n\t\t\t\t\t\t<option value=\"Italie\">italie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Jamaique\">Jamaique </option>\r\n\t\t\t\t\t\t<option value=\"Jan Mayen\">Jan Mayen </option>\r\n\t\t\t\t\t\t<option value=\"Japon\">Japon </option>\r\n\t\t\t\t\t\t<option value=\"Jersey\">Jersey </option>\r\n\t\t\t\t\t\t<option value=\"Jordanie\">Jordanie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Kazakhstan\">Kazakhstan </option>\r\n\t\t\t\t\t\t<option value=\"Kenya\">Kenya </option>\r\n\t\t\t\t\t\t<option value=\"Kirghizstan\">Kirghizistan </option>\r\n\t\t\t\t\t\t<option value=\"Kiribati\">Kiribati </option>\r\n\t\t\t\t\t\t<option value=\"Koweit\">Koweit </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Laos\">Laos </option>\r\n\t\t\t\t\t\t<option value=\"Lesotho\">Lesotho </option>\r\n\t\t\t\t\t\t<option value=\"Lettonie\">Lettonie </option>\r\n\t\t\t\t\t\t<option value=\"Liban\">Liban </option>\r\n\t\t\t\t\t\t<option value=\"Liberia\">Liberia </option>\r\n\t\t\t\t\t\t<option value=\"Liechtenstein\">Liechtenstein </option>\r\n\t\t\t\t\t\t<option value=\"Lituanie\">Lituanie </option>\r\n\t\t\t\t\t\t<option value=\"Luxembourg\">Luxembourg </option>\r\n\t\t\t\t\t\t<option value=\"Lybie\">Lybie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Macao\">Macao </option>\r\n\t\t\t\t\t\t<option value=\"Macedoine\">Macedoine </option>\r\n\t\t\t\t\t\t<option value=\"Madagascar\">Madagascar </option>\r\n\t\t\t\t\t\t<option value=\"Madère\">Madère </option>\r\n\t\t\t\t\t\t<option value=\"Malaisie\">Malaisie </option>\r\n\t\t\t\t\t\t<option value=\"Malawi\">Malawi </option>\r\n\t\t\t\t\t\t<option value=\"Maldives\">Maldives </option>\r\n\t\t\t\t\t\t<option value=\"Mali\">Mali </option>\r\n\t\t\t\t\t\t<option value=\"Malte\">Malte </option>\r\n\t\t\t\t\t\t<option value=\"Man\">Man </option>\r\n\t\t\t\t\t\t<option value=\"Mariannes du Nord\">Mariannes du Nord </option>\r\n\t\t\t\t\t\t<option value=\"Maroc\">Maroc </option>\r\n\t\t\t\t\t\t<option value=\"Marshall\">Marshall </option>\r\n\t\t\t\t\t\t<option value=\"Martinique\">Martinique </option>\r\n\t\t\t\t\t\t<option value=\"Maurice\">Maurice </option>\r\n\t\t\t\t\t\t<option value=\"Mauritanie\">Mauritanie </option>\r\n\t\t\t\t\t\t<option value=\"Mayotte\">Mayotte </option>\r\n\t\t\t\t\t\t<option value=\"Mexique\">Mexique </option>\r\n\t\t\t\t\t\t<option value=\"Micronesie\">Micronesie </option>\r\n\t\t\t\t\t\t<option value=\"Midway\">Midway </option>\r\n\t\t\t\t\t\t<option value=\"Moldavie\">Moldavie </option>\r\n\t\t\t\t\t\t<option value=\"Monaco\">Monaco </option>\r\n\t\t\t\t\t\t<option value=\"Mongolie\">Mongolie </option>\r\n\t\t\t\t\t\t<option value=\"Montserrat\">Montserrat </option>\r\n\t\t\t\t\t\t<option value=\"Mozambique\">Mozambique </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Namibie\">Namibie </option>\r\n\t\t\t\t\t\t<option value=\"Nauru\">Nauru </option>\r\n\t\t\t\t\t\t<option value=\"Nepal\">Nepal </option>\r\n\t\t\t\t\t\t<option value=\"Nicaragua\">Nicaragua </option>\r\n\t\t\t\t\t\t<option value=\"Niger\">Niger </option>\r\n\t\t\t\t\t\t<option value=\"Nigeria\">Nigeria </option>\r\n\t\t\t\t\t\t<option value=\"Niue\">Niue </option>\r\n\t\t\t\t\t\t<option value=\"Norfolk\">Norfolk </option>\r\n\t\t\t\t\t\t<option value=\"Norvege\">Norvege </option>\r\n\t\t\t\t\t\t<option value=\"Nouvelle_Caledonie\">Nouvelle_Caledonie </option>\r\n\t\t\t\t\t\t<option value=\"Nouvelle_Zelande\">Nouvelle_Zelande </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Oman\">Oman </option>\r\n\t\t\t\t\t\t<option value=\"Ouganda\">Ouganda </option>\r\n\t\t\t\t\t\t<option value=\"Ouzbekistan\">Ouzbekistan </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Pakistan\">Pakistan </option>\r\n\t\t\t\t\t\t<option value=\"Palau\">Palau </option>\r\n\t\t\t\t\t\t<option value=\"Palestine\">Palestine </option>\r\n\t\t\t\t\t\t<option value=\"Panama\">Panama </option>\r\n\t\t\t\t\t\t<option value=\"Papouasie_Nouvelle_Guinee\">Papouasie_Nouvelle_Guinee </option>\r\n\t\t\t\t\t\t<option value=\"Paraguay\">Paraguay </option>\r\n\t\t\t\t\t\t<option value=\"Pays_Bas\">Pays_Bas </option>\r\n\t\t\t\t\t\t<option value=\"Perou\">Perou </option>\r\n\t\t\t\t\t\t<option value=\"Philippines\">Philippines </option>\r\n\t\t\t\t\t\t<option value=\"Pologne\">Pologne </option>\r\n\t\t\t\t\t\t<option value=\"Polynesie\">Polynesie </option>\r\n\t\t\t\t\t\t<option value=\"Porto_Rico\">Porto_Rico </option>\r\n\t\t\t\t\t\t<option value=\"Portugal\">Portugal </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Qatar\">Qatar </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Republique_Dominicaine\">Republique_Dominicaine </option>\r\n\t\t\t\t\t\t<option value=\"Republique_Tcheque\">Republique_Tcheque </option>\r\n\t\t\t\t\t\t<option value=\"Reunion\">Reunion </option>\r\n\t\t\t\t\t\t<option value=\"Roumanie\">Roumanie </option>\r\n\t\t\t\t\t\t<option value=\"Royaume_Uni\">Royaume_Uni </option>\r\n\t\t\t\t\t\t<option value=\"Russie\">Russie </option>\r\n\t\t\t\t\t\t<option value=\"Rwanda\">Rwanda </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Sahara Occidental\">Sahara Occidental </option>\r\n\t\t\t\t\t\t<option value=\"Sainte_Lucie\">Sainte Lucie </option>\r\n\t\t\t\t\t\t<option value=\"Saint_Marin\">Saint_Marin </option>\r\n\t\t\t\t\t\t<option value=\"Salomon\">Salomon </option>\r\n\t\t\t\t\t\t<option value=\"Salvador\">Salvador </option>\r\n\t\t\t\t\t\t<option value=\"Samoa_Occidentales\">Samoa_Occidentales</option>\r\n\t\t\t\t\t\t<option value=\"Samoa_Americaine\">Samoa_Americaine </option>\r\n\t\t\t\t\t\t<option value=\"Sao_Tome_et_Principe\">Sao_Tome_et_Principe </option>\r\n\t\t\t\t\t\t<option value=\"Senegal\">Senegal </option>\r\n\t\t\t\t\t\t<option value=\"Seychelles\">Seychelles </option>\r\n\t\t\t\t\t\t<option value=\"Sierra Leone\">Sierra Leone </option>\r\n\t\t\t\t\t\t<option value=\"Singapour\">Singapour </option>\r\n\t\t\t\t\t\t<option value=\"Slovaquie\">Slovaquie </option>\r\n\t\t\t\t\t\t<option value=\"Slovenie\">Slovenie</option>\r\n\t\t\t\t\t\t<option value=\"Somalie\">Somalie </option>\r\n\t\t\t\t\t\t<option value=\"Soudan\">Soudan </option>\r\n\t\t\t\t\t\t<option value=\"Sri_Lanka\">Sri_Lanka </option>\r\n\t\t\t\t\t\t<option value=\"Suede\">Suede </option>\r\n\t\t\t\t\t\t<option value=\"Suisse\">Suisse </option>\r\n\t\t\t\t\t\t<option value=\"Surinam\">Surinam </option>\r\n\t\t\t\t\t\t<option value=\"Swaziland\">Swaziland </option>\r\n\t\t\t\t\t\t<option value=\"Syrie\">Syrie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Tadjikistan\">Tadjikistan </option>\r\n\t\t\t\t\t\t<option value=\"Taiwan\">Taiwan </option>\r\n\t\t\t\t\t\t<option value=\"Tonga\">Tonga </option>\r\n\t\t\t\t\t\t<option value=\"Tanzanie\">Tanzanie </option>\r\n\t\t\t\t\t\t<option value=\"Tchad\">Tchad </option>\r\n\t\t\t\t\t\t<option value=\"Thailande\">Thailande </option>\r\n\t\t\t\t\t\t<option value=\"Tibet\">Tibet </option>\r\n\t\t\t\t\t\t<option value=\"Timor_Oriental\">Timor_Oriental </option>\r\n\t\t\t\t\t\t<option value=\"Togo\">Togo </option>\r\n\t\t\t\t\t\t<option value=\"Trinite_et_Tobago\">Trinite_et_Tobago </option>\r\n\t\t\t\t\t\t<option value=\"Tristan da cunha\">Tristan de cuncha </option>\r\n\t\t\t\t\t\t<option value=\"Tunisie\">Tunisie </option>\r\n\t\t\t\t\t\t<option value=\"Turkmenistan\">Turmenistan </option>\r\n\t\t\t\t\t\t<option value=\"Turquie\">Turquie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Ukraine\">Ukraine </option>\r\n\t\t\t\t\t\t<option value=\"Uruguay\">Uruguay </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Vanuatu\">Vanuatu </option>\r\n\t\t\t\t\t\t<option value=\"Vatican\">Vatican </option>\r\n\t\t\t\t\t\t<option value=\"Venezuela\">Venezuela </option>\r\n\t\t\t\t\t\t<option value=\"Vierges_Americaines\">Vierges Americaines </option>\r\n\t\t\t\t\t\t<option value=\"Vierges_Britanniques\">Vierges Britanniques </option>\r\n\t\t\t\t\t\t<option value=\"Vietnam\">Vietnam </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Wake\">Wake </option>\r\n\t\t\t\t\t\t<option value=\"Wallis et Futuma\">Wallis et Futuma </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Yemen\">Yemen </option>\r\n\t\t\t\t\t\t<option value=\"Yougoslavie\">Yougoslavie </option>\r\n\r\n\t\t\t\t\t\t<option value=\"Zambie\">Zambie </option>\r\n\t\t\t\t\t\t<option value=\"Zimbabwe\">Zimbabwe </option>\r\n\t\t\t\t\t  </select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"item form-group\">\r\n\t\t\t\t\t<label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code postal</label>\r\n\t\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"profile['zip_code']\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"control-label col-md-1 col-sm-1 col-xs-12\">Ville</label>\r\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"profile['city']\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t  \r\n\t\t\t\t<div class=\"ln_solid\"></div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-offset-3\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"save()\" class=\"btn btn-success\">Enregistrer</button>\r\n\t\t\t\t\t\t\t<div *ngIf=\"error != undefined || success != undefined\" style=\"margin-left:110px;margin-top: -19px;\">\r\n\t\t\t\t\t\t\t\t<i *ngIf=\"error != undefined\" class=\"red\">{{ error }}</i>\r\n\t\t\t\t\t\t\t\t<i *ngIf=\"success != undefined\" class=\"green\">{{ success }}</i>\r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ })

},[1127]);
//# sourceMappingURL=main.bundle.js.map