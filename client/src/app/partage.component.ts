import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'partage',
  templateUrl: 'partage.component.html'
})
export class PartageComponent {	
	levelDescription : String = "Aucune donnée ne sera envoyée au serveur PersoCloud. Vous ne pourrez donc pas les comparer à celles des autres utilisateurs de PersoCloud.";
	/*checkboxDisabled:boolean = true;
	checkboxes: Object = [{label: 'Numericable', chosen: false},{label: 'two', chosen: true}];*/
	
	private changeLevel(slider) : void {			
		switch(slider.from) {
			case 0: this.levelDescription = "Aucune donnée ne sera envoyée au serveur PersoCloud. Vous ne pourrez donc pas les comparer à celles des autres utilisateurs de PersoCloud."; break;
			case 1: this.levelDescription = "Uniquement les données anodines seront envoyées au serveur PersoCloud comme votre humeur quotidienne."; break;
			case 2: this.levelDescription = "Vos données privées seront partagées avec les autres utilisateurs comme le montant de vos factures où votre consommation électrique."; break;
			case 3: this.levelDescription = "Vos données confidentielles seront utilisées pour les analyses statistiques de PersoCloud comme vos recettes et dépenses bancaires."; break;
			default: this.levelDescription = "Vous choisissez quel type de donnée vous partagez et depuis quelle source."; break;
		}
	}
	
	ngAfterViewInit(): void {
		jQuery("#level_slider").ionRangeSlider({
			type: "single",
			values: [
				"Aucun partage", "Minimun", "Moyen", "Important", "Personnalisé"
			],			
			from: 0,
			grid: true,			
			force_edges: true,
			
			onChange: (slider) => {
				this.changeLevel(slider);				
			},
			onStart: (slider) => {
				this.changeLevel(slider);				
			}
		});
		
		jQuery('input').iCheck({
			checkboxClass: 'icheckbox_flat-green',
			radioClass: 'iradio_flat-green'
		});
	}
}
