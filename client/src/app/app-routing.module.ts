import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonneesComponent }	from './donnees.component';
import { PartageComponent }	from './partage.component';
import { ProfilComponent }	from './profil.component';
import { AideComponent }	from './aide.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',		 		component: DonneesComponent },
  { path: 'partage',		component: PartageComponent },
  { path: 'profil',			component: ProfilComponent },
  { path: 'aide',			component: AideComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
