import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { AnalyzeModel, AnalyzeOptions } from './analyze.models';
import { AnalyzeService } from './analyze.service';
import { AvailableData } from './analyze.availableData';

declare var jQuery: any;
declare var moment: any;

@Component({
	selector: 'donnees',
	templateUrl: './donnees.component.html',
	providers: [AnalyzeService]
})
export class DonneesComponent {	
	analyzeResults: AnalyzeModel;
	analyzeOptions: AnalyzeOptions;	
	analyzeOptions_editing: AnalyzeOptions;	
	availableFields: Object = AvailableData.fields;
	availableMetaKeys: Object = AvailableData.metakeyKeys;
	availableGroupKeys: Object = AvailableData.groupKeys;
	
	serviceError: string = undefined;
	groupTimeValue: number = 1;	
	groupTimeDuration: string = 'w';	
	btnAnalyzeDisabled: boolean = false;
	btnAnalyzeValue: string = "Lancer l'analyse";
	btnAnalyzeDescription: string;
	analyzeStarted: boolean = false;
	
	constructor(private AnalyzeService: AnalyzeService) { }
	
	// Au chargement de la page
	ngOnInit(): void {
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
	}
	
	// Après la génération de la page
	ngAfterViewInit(): void {
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
			onChange: (slider) => {
				this.periodChange(slider);				
			},
			onFinish: (slider) => {
				this.periodFinish(slider);				
			}
		});
	}
	
	////// Lancement de l'analyse
	
	getAnalyze(): void {
		this.serviceError = undefined;
		this.analyzeOptions = this.analyzeOptions_editing;
		
		if(this.analyzeOptions.field != undefined) {
			this.btnAnalyzeDisabled = true;
			this.btnAnalyzeValue = "Analyse en cours...";
			this.analyzeStarted = true;
			
			var options = this.analyzeOptions;
			if(options.group == 'time') { // Période de temps
				var group = "time(" + this.groupTimeValue + this.groupTimeDuration + ")";
				if(this.groupTimeDuration == 'y') {
					var group = "time(" + (this.groupTimeValue * 52) + "w)";
				}
				
				options = {
					field: this.analyzeOptions.field,
					metakey: this.analyzeOptions.metakey,
					group: group,	
					period: this.analyzeOptions.period
				}
			} 
			
			this.AnalyzeService.getAnalyze(options)
				.then(results => {
					this.analyzeResults = results;
					this.btnAnalyzeDisabled = true;
					this.btnAnalyzeValue = "Lancer l'analyse";
					this.btnAnalyzeDescription = "Modifier les paramètres de l'analyse avant d'en relancer une";
					this.analyzeStarted = false;
				})
				.catch(e => {
					if(e.status == 503) {
						this.serviceError = "Erreur " + e.status + " : Le moteur de calcul de PersoCloud n'est pas disponible";
					} else {
						this.serviceError = "Erreur " + e.status + " : " + e.statusText;
					}
					this.activeBtnAnalyze();
					this.analyzeStarted = false;
				});
		}
	}
	
	
	////// Recherche
	
	private fieldChange(item) : void {	
		this.analyzeOptions_editing = {
			field: item,
			metakey: this.availableMetaKeys[item][0].key,
			group: "time",	
			period: this.analyzeOptions_editing.period
		}	
		this.activeBtnAnalyze();
	}
	
	private metakeyChange(item) : void {	
		this.analyzeOptions_editing = {
			field: this.analyzeOptions_editing.field,
			metakey: item,
			group: this.analyzeOptions_editing.group,	
			period: this.analyzeOptions_editing.period
		}	
		this.activeBtnAnalyze();
	}
	
	private groupChange(item) : void {	
		this.analyzeOptions_editing = {
			field: this.analyzeOptions_editing.field,
			metakey: this.analyzeOptions_editing.metakey,
			group: item == "" ? undefined : item,	
			period: this.analyzeOptions_editing.period
		}		
		this.activeBtnAnalyze();
	}
	
	private groupTimeValueChange(item) : void {	
		this.groupTimeValue = item;
		this.activeBtnAnalyze();
	}
	
	private groupTimeDurationChange(item) : void {	
		this.groupTimeDuration = item;
		this.activeBtnAnalyze();
	}
	
	private activeBtnAnalyze() {
		this.btnAnalyzeDisabled = false;
		this.btnAnalyzeValue = "Lancer l'analyse";
		this.btnAnalyzeDescription = "";
	}
	
	
	
	////// Recherche > Période
	
	@ViewChild(DaterangePickerComponent)
    private picker: DaterangePickerComponent;
	
	public period_daterange: any = {};
	period_daterange_options: any = {
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

    private selectedPeriodDaterange(value: any) {
        this.period_daterange.start = value.start;
        this.period_daterange.end = value.end;
		this.activeBtnAnalyze();
    }
	
	private periodFinish(slider) : void {		
		this.analyzeOptions_editing = {
			field: this.analyzeOptions_editing.field,
			metakey: this.analyzeOptions_editing.metakey,
			group: this.analyzeOptions_editing.group,	
			period: {
				start: moment(slider.from, 'X').utc().startOf('day').format("X"),
				end: moment(slider.to, 'X').utc().endOf('day').format("X")
			}
		}	
		this.periodChange(slider);			
	}
	
	private periodChange(slider) : void {		
		this.picker.datePicker.setStartDate(moment(slider.from, 'X').utc().startOf('day'));
		this.picker.datePicker.setEndDate(moment(slider.to, 'X').utc().endOf('day'));
		this.activeBtnAnalyze();
	}
		
	public applyPeriodDaterange(e:any) {
        this.analyzeOptions_editing = {
			field: this.analyzeOptions_editing.field,
			metakey: this.analyzeOptions_editing.metakey,
			group: this.analyzeOptions_editing.group,	
			period: {
				start: this.period_daterange.start.utc().format("X"),
				end: this.period_daterange.end.utc().format("X")
			}
		}	
		
		let slider = jQuery("#period_slider").data("ionRangeSlider");
		slider.update({
			from: this.analyzeOptions_editing.period.start,
			to: this.analyzeOptions_editing.period.end
		});
    }
}
