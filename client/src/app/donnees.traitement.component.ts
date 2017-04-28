import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AnalyzeModel, AnalyzeOptions } from './analyze.models';

import { environment } from '../environments/environment';

@Component({
	selector: 'donnees-traitement',
	templateUrl: './donnees.traitement.component.html'
})
export class DonneesTraitementComponent{	
	@Input() donnees : AnalyzeModel;
	@Input() analyzeOptions : AnalyzeOptions;
	aggregate: string;
	labels: String[];
	valuesForChart: number[];
	valuesForBarChart: any[];
  
	typeChart: string;
	
	private aggregateChange(item) : void {	
		this.aggregate = item;
		this.traiter();
	}
  
	traiter(): void {
		this.labels = [];
		this.valuesForChart = [];
		this.valuesForBarChart = [];		

		var dataBarChart = [];
		var dataUser = [];
		var dataMoteur = [];
		
		var group = this.analyzeOptions.group;
		if(group.substr(0, 5) == "time(") {
			group = "time";
		}		

		for(var i in this.donnees.cozy.data) {	
			var item = this.donnees.cozy.data[i];
			console.log(item);
			dataUser.push(item[this.aggregate]);
			if (this.labels.indexOf(item[group]) === -1) { // Element was not found, add it.
				this.labels.push(item[group]);
				this.valuesForChart.push(item[this.aggregate]);
			}			
		};
		dataBarChart[0] = {data: dataUser, label: 'Moi'};
		this.valuesForBarChart.push(dataBarChart[0]);

		for(var i in this.donnees.engine.data) {
			var item = this.donnees.engine.data[i];			
			dataMoteur.push(item[this.aggregate]);
			if (this.labels.indexOf(item[group]) === -1) { // Element was not found, add it.
				this.labels.push(item[group]);	
			}			
		};
		dataBarChart[1] = {data: dataMoteur, label: 'Autres utilisateurs'};
		this.valuesForBarChart.push(dataBarChart[1]);	

		//Start displaying in console
		/*console.log("Valeurs finales");
		console.log(this.labels);
		console.log(this.valuesForChart);
		console.log(this.valuesForBarChart);*/
	}

	ngOnChanges(donnees : AnalyzeModel) {
		this.aggregate = "count";
		this.traiter();
	}

	ngOnInit(): void {
		this.typeChart = "doughnut";
		this.aggregate = "count";
	}  	
}
