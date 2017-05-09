import { Component, AfterViewInit } from '@angular/core';
import { ProfileModel } from './profile.model';
import { OptionService } from './option.service';
import { Observable } from 'rxjs/Rx';

declare var jQuery: any;

@Component({
  selector: 'profil',
  templateUrl: 'profil.component.html',
  providers: [OptionService]
})
export class ProfilComponent {
	public profile: ProfileModel = {
		birthdate: undefined,
		gender: undefined,
		country: undefined,
		zip_code: undefined,
		city: undefined
	};
	
	error: string = undefined;
	success: string = undefined;
	
	constructor(private OptionService: OptionService) { }
	
	ngOnInit(): void {
		this.getProfile();		
	}
	
	getProfile(): void {
		this.error = undefined;

		this.OptionService.getProfile()
			.then(profile => {
				this.profile = profile;
				this.profile.gender = (profile.gender == null) ? "null" : this.profile.gender;
				this.profile.country = (profile.country == null) ? "France" : this.profile.country;
			})
			.catch(e => {
				this.error = "Erreur " + e.status + " : " + e.statusText;				
			});
	}
	
	save(): void {
		this.error = undefined;
		this.success = undefined;
		this.OptionService.setProfile(this.profile)
			.subscribe(
				data => {
					this.success = "Profil sauvegardé";
					return true;
				},
				error => {
					this.error = "Une erreur inconnue est survenue";
					return Observable.throw(error);
			   }
			);			
       
	}
}
