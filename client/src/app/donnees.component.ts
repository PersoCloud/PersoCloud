import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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
	availableFields: Object = AvailableData.fields;
	availableMetaKeys: Object = AvailableData.metakeyKeys;
	availableGroupKeys: Object = AvailableData.groupKeys;
	
	groupTimeValue: number = 1;	
	groupTimeDuration: string = 'w';	
	btnAnalyzeDisabled: boolean = false;
	btnAnalyzeValue: string = "Lancer l'analyse";
	btnAnalyzeDescription: string;
	serviceError: string = undefined;
	
	constructor(private AnalyzeService: AnalyzeService) { }
	
	ngOnInit(): void {
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
	}
	
	private periodFinish(slider) : void {	
		this.analyzeOptions = {
			field: this.analyzeOptions.field,
			metakey: this.analyzeOptions.metakey,
			group: this.analyzeOptions.group,	
			period: {
				start: slider.from,
				end: slider.to
			}
		}	
		this.activeBtnAnalyze();
	}
	
	private fieldChange(item) : void {	
		this.analyzeOptions = {
			field: item,
			metakey: this.availableMetaKeys[item][0].key,
			group: "time",	
			period: this.analyzeOptions.period
		}	
		this.activeBtnAnalyze();
	}
	
	private metakeyChange(item) : void {	
		this.analyzeOptions = {
			field: this.analyzeOptions.field,
			metakey: item,
			group: this.analyzeOptions.group,	
			period: this.analyzeOptions.period
		}	
		this.activeBtnAnalyze();
	}
	
	private groupChange(item) : void {	
		this.analyzeOptions = {
			field: this.analyzeOptions.field,
			metakey: this.analyzeOptions.metakey,
			group: item == "" ? undefined : item,	
			period: this.analyzeOptions.period
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
	
	getAnalyze(): void {
		this.serviceError = undefined;
		
		if(this.analyzeOptions.field != undefined) {
			this.btnAnalyzeDisabled = true;
			this.btnAnalyzeValue = "Analyse en cours...";
			
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
				})
				.catch(e => {
					this.serviceError = "Erreur " + e.status + " : " + e.statusText;
					this.activeBtnAnalyze();
				});
		}
	}
	
	ngAfterViewInit(): void {
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
			onFinish: (slider) => {
				this.periodFinish(slider);				
			}
		});
	}
}
