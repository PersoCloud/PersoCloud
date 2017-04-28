import { Component, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'profil',
  templateUrl: 'profil.component.html'
})
export class ProfilComponent {
	public radioGendor: string = 'unspecified';
}
