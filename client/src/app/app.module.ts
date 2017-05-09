import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { ButtonsModule, AlertModule, TooltipModule } from 'ngx-bootstrap';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MomentModule } from 'angular2-moment';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DonneesComponent }	from './donnees.component';
import { DonneesTraitementComponent }	from './donnees.traitement.component';
import { AnalyzeService } from './analyze.service';
import { OptionService } from './option.service';
import { AideComponent }  from './aide.component';
import { PartageComponent } from './partage.component';
import { ProfilComponent } from './profil.component';

@NgModule({
  declarations: [
    AideComponent,
    AppComponent,
	DonneesComponent,
	DonneesTraitementComponent,
	PartageComponent,
	ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
	ChartsModule,
	IonRangeSliderModule,
	Angular2FontawesomeModule,
	MomentModule,
	Daterangepicker,
	ButtonsModule.forRoot(),
	AlertModule.forRoot(),
	TooltipModule.forRoot()
  ],
  providers: [
    AnalyzeService,
	OptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
