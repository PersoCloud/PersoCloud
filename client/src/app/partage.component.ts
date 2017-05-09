import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SharingPermissionsModel } from './analyze.availableData';
import { OptionService } from './option.service';
import { Observable } from 'rxjs/Rx';

declare var jQuery: any;

@Component({
  selector: 'partage',
  templateUrl: 'partage.component.html',
  providers: [OptionService]
})
export class PartageComponent {	
	levelDescription : String;
	levelValue : Number;	
	sharingPolicy : SharingPermissionsModel[] = [];
	
	error: string = undefined;
	success: string = undefined;
	jQueryActivate: boolean = false;
	
	constructor(private OptionService: OptionService) { }
	
	ngOnInit(): void {
		this.getSharingPermissions(); 
	}
	
	getSharingPermissions(): void {
		this.error = undefined;

		this.OptionService.getSharingPermissions()
			.then(sharingPermissions => {
				this.sharingPolicy = sharingPermissions;				
			})
			.catch(e => {
				this.error = "Erreur " + e.status + " : " + e.statusText;				
			});
	}	
	
	ngAfterViewInit(): void {
		jQuery("#level_slider").ionRangeSlider({
			type: "single",
			values: [
				"Aucun partage", "Minimun", "Moyen", "Tout partager", "Personnalisé"
			],			
			from: 0,
			grid: true,			
			force_edges: true,
			
			onChange: (slider) => {
				this.changeLevel(slider.from);
			},
			onStart: (slider) => {
				this.changeLevel(slider.from);			
			}
		});
	}
	
	ngAfterViewChecked() {	
		if(!this.jQueryActivate && jQuery('input').length > 1) {
			this.jQueryActivate = true;
			jQuery('input').iCheck({
				checkboxClass: 'icheckbox_flat-green',
				radioClass: 'iradio_flat-green'
			});
			
			jQuery('input').on('ifClicked', (event) => {
				this.error = undefined;
				this.success = undefined;
				this.changeCheckboxState(event.target.id, event.target.checked);
				this.changeLevel(4);
				let slider = jQuery("#level_slider").data("ionRangeSlider");
				slider.update({ from: 4 });
			});
			
			this.levelValue = this.getInitialLevel();
			this.setLevelDescription();
			let slider = jQuery("#level_slider").data("ionRangeSlider");
			slider.update({ from: this.levelValue });
			this.changeCheckboxesState("current", undefined);
		}
	}
	
	private getInitialLevel() : Number { //FIXME: To improve
		var humor = 0;
		var consuptionBill = 0;	
		var consuptionBillTotal = 0;	
		var bank = 0;	
		var bankTotal = 0;	
		for (let cb of this.sharingPolicy) {
			if(cb.label.toLowerCase() == "humeur") {
				humor += (cb.types[0].allowed) ? 1 : 0;
			} else if(cb.label.toLowerCase() == "consommation" || cb.label.toLowerCase() == "factures") {
				for (let type of cb.types) {
					consuptionBill += (type.allowed) ? 1 : 0;
					consuptionBillTotal++;
				}
			} else { // Bank
				for (let type of cb.types) {
					bank += (type.allowed) ? 1 : 0;
					bankTotal++;
				}
			}
		}
		
		if(humor == 0 && consuptionBill == 0 && bank == 0) { return 0; }
		if(humor > 0 && consuptionBill == consuptionBillTotal && bank == bankTotal) { return 3; }
		if(humor > 0 && consuptionBill == 0 && bank == 0) { return 1; }		
		if(humor > 0 && consuptionBill == consuptionBillTotal && bank == 0) { return 2; }
		return 4; 
	}
	
	private setLevelDescription() : void {
		switch(this.levelValue) {
			case 0: // None
				this.levelDescription = "Aucune donnée ne sera envoyée au serveur PersoCloud. Vous ne pourrez donc pas les comparer à celles des autres utilisateurs de PersoCloud.";
				break;
			case 1: // Minimal
				this.levelDescription = "Uniquement les données anodines seront envoyées au serveur PersoCloud comme votre humeur quotidienne."; 
				break;
			case 2: // Medium
				this.levelDescription = "Vos données privées seront partagées avec les autres utilisateurs comme le montant de vos factures où votre consommation électrique."; 
				break;
			case 3: // Important
				this.levelDescription = "Vos données confidentielles seront utilisées pour les analyses statistiques de PersoCloud comme vos recettes et dépenses bancaires."; 
				break;
			default: // All
				this.levelDescription = "Vous choisissez quel type de donnée vous partagez et depuis quelle source.";				
				break;
		}
	}
		
	private changeLevel(value) : void {	
		switch(value) {
			case 0: // None
				this.changeCheckboxesState("all", "uncheck");
				break;
			case 1: // Minimal
				this.changeCheckboxesState("humeur", "check", );
				this.changeCheckboxesState("consommation", "uncheck");
				this.changeCheckboxesState("factures", "uncheck");
				this.changeCheckboxesState("données bancaires", "uncheck");
				break;
			case 2: // Medium
				this.changeCheckboxesState("humeur", "check", );
				this.changeCheckboxesState("consommation", "check");
				this.changeCheckboxesState("factures", "check");
				this.changeCheckboxesState("données bancaires", "uncheck");
				break;
			case 3: // Important
				this.changeCheckboxesState("all", "check");
				break;
			default: // All			
				break;
		}
		this.levelValue = value;
		this.setLevelDescription();
	}
	
	private changeCheckboxesState(section, checked) : void {
		let section_i = 0;
		let type_i = 0;
		if(section.toLowerCase() == "all") {			
			for (let cb of this.sharingPolicy) {
				for (let type of cb.types) {
					jQuery('#' + type.key).iCheck(checked);
					this.sharingPolicy[section_i].types[type_i].allowed = (checked != 'uncheck');
					type_i++;
				}
				type_i = 0;
				section_i++;
			}
		} else if(section.toLowerCase() == "current") {			
			for (let cb of this.sharingPolicy) {
				for (let type of cb.types) {
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
				if(this.sharingPolicy[section_i].label.toLowerCase() == section.toLowerCase()) {
					break;
				}
			}

			// Mise à jour des checkboxes
			for (let type of this.sharingPolicy[section_i].types) {
				jQuery('#' + type.key).iCheck(checked);
				this.sharingPolicy[section_i].types[type_i].allowed = (checked != 'uncheck');
				type_i++;
			}
		}
	}
	
	private changeCheckboxState(id, checked) : void {
		let section_i = 0;
		let type_i = 0;
		// Recherche de l'emplacement de la section
		for (section_i = 0; section_i < this.sharingPolicy.length; section_i++) {
			for (let type of this.sharingPolicy[section_i].types) {
				if(type.key == id) {					
					this.sharingPolicy[section_i].types[type_i].allowed = (!checked);
					break;
				}
				type_i++;
			}
			type_i = 0;
		}
	}
	
	save(): void {
		this.error = undefined;
		this.success = undefined;
		this.OptionService.setSharingPermissions(this.sharingPolicy)
			.subscribe(
				data => {
					this.success = "Politique de partage sauvegardée";
					return true;
				},
				error => {
					this.error = "Une erreur inconnue est survenue";
					return Observable.throw(error);
			   }
			);			
       
	}
}
