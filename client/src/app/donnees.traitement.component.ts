import { Component, OnInit, Input, OnChanges, Pipe, ViewChild, ElementRef, AfterViewInit, Directive } from '@angular/core';
import { AnalyzeModel, AnalyzeOptions } from './analyze.models';
import { BaseChartDirective  } from 'ng2-charts/ng2-charts';

import { environment } from '../environments/environment';

declare var randomColor: any; 
declare var jQuery: any;

@Component({
	selector: 'donnees-traitement',
	templateUrl: './donnees.traitement.component.html'
})
export class DonneesTraitementComponent{	
	@Input() donnees : AnalyzeModel;
	@Input() analyzeOptions : AnalyzeOptions;
	@Input() analyzeStarted : boolean;
	aggregate: string = "count";
	labels: String[] = [];
	valuesForChartMe: number[];
	valuesForChartAll: number[];
	valuesForBarChart: any[]; 
	labelsColors: Array<any>;
	chartType: string;
	chartjsColors: Array<string> = [];
	
	@ViewChild(BaseChartDirective) private ChartMe: BaseChartDirective;
	@ViewChild(BaseChartDirective) private ChartAll: BaseChartDirective;
	@ViewChild(BaseChartDirective) private BarChart: BaseChartDirective;
	
	ngOnInit(): void {
		this.chartType = "doughnut";
		this.aggregate = "count";
	} 

	ngOnChanges() {		
		this.traiter();	
	}
	
	private aggregateChange(item) : void {	
		this.aggregate = item;
		this.traiter();
	}
	
	getRandomColors(nb : number) : Array<string> {
		if(this.chartjsColors.length < 12) {
			this.chartjsColors = ["#FFA1B5", "#86C7F3", "#FFE199", "#F0F2F4", "#93D9D9", "#C0D6E1", "#7CDA87", "#FA9092", "#90D8D7", "#FED29D", "#BFC5D0", "#94979F"];
			if(nb-12 > 0) {
				this.chartjsColors = this.chartjsColors.concat(randomColor({luminosity: 'light', count: 38}));
			} 
		} else {
			if(nb > this.chartjsColors.length) {
				this.chartjsColors = this.chartjsColors.concat(randomColor({luminosity: 'light', count: nb-this.chartjsColors.length}));
			}			
		}
		return this.chartjsColors;
	}
	  
	traiter(): void {
		this.labels = [];		
		this.valuesForChartMe = [];
		this.valuesForChartAll = [];
		this.valuesForBarChart = [];		

		var dataUser = [];
		var dataMoteur = [];
		
		var group = this.analyzeOptions.group;
		if(group.substr(0, 5) == "time(") {
			group = "time";
		}	

		for(var i in this.donnees.engine.data) {
			var item = this.donnees.engine.data[i];			
			dataMoteur.push(item[this.aggregate]);
			var label = item[group];
			if (this.labels.indexOf(label) === -1) { // Element was not found, add it.
				this.labels.push(label);			
			}			
		};
		this.valuesForBarChart.push({data: dataMoteur, label: 'Autres utilisateurs'});	
		this.valuesForChartAll = dataMoteur;
		
		var offsetForLabel = 0;
		for(var i in this.donnees.cozy.data) {	
			var item = this.donnees.cozy.data[i];
			var label = item[group];
			while(this.labels.indexOf(label) != offsetForLabel) {
				dataUser.push(undefined);
				offsetForLabel++;								
			}
			dataUser.push(item[this.aggregate]);
			offsetForLabel++;			
		};
		this.valuesForBarChart.push({data: dataUser, label: 'Moi'});
		this.valuesForChartMe = dataUser;
		
		this.labelsColors = [{ backgroundColor: this.getRandomColors(this.labels.length) }];
		
		this.refresh_charts();
	}
	
	refresh_charts() :void {
		if(this.ChartMe != undefined) {
			this.ChartMe.labels = this.labels;
			this.ChartMe.data = this.valuesForChartMe;
			this.ChartMe.ngOnChanges({});
		}
		
		if(this.ChartAll != undefined) {
			this.ChartAll.labels = this.labels;
			this.ChartAll.data = this.valuesForChartAll;
			this.ChartAll.ngOnChanges({});
		}
		
		if(this.BarChart != undefined) {
			this.BarChart.labels = this.labels;
			this.BarChart.data = this.valuesForBarChart;
			this.BarChart.ngOnChanges({});
		}
	}
	
	addSpaces(n){
		var rx=  /(\d+)(\d{3})/;
		return String(n).replace(/^\d+/, function(w){
			while(rx.test(w)){
				w= w.replace(rx, '$1 $2');
			}
			return w;
		});
	}
	
	toDecimal(value, decimals) {
		var newnumber = new Number(value+'').toFixed(parseInt(decimals));
		return parseFloat(newnumber);
	}
	
	toDecimalHtml(num, nbDecimal) {
		return this.addSpaces(this.toDecimal(num, nbDecimal));
	}
	
	toPercentHtml(val1, val2) {
		var decrease = val2 - val1;
		var result = this.toDecimal((decrease / val1) * 100, 2);
		if(Number(this.toDecimal(result, 0)) > 0) {
			return '<i class="green"><i class="fa fa-sort-asc"></i> ' + result + ' % </i>';
		} else if(Number(this.toDecimal(result, 0)) < 0) {
			return '<i class="red"><i class="fa fa-sort-desc"></i> ' + result + ' % </i>';
		} else {
			return '<i style="color:#54b5d5;"><i class="fa fa-sort"></i> ' + result + ' % </i>';
		}
	}
}
