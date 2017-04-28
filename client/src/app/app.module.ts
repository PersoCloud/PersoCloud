import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { ButtonsModule, AlertModule, TooltipModule } from 'ngx-bootstrap';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MomentModule } from 'angular2-moment';

import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './charts/pie-chart';
import { DoughnutChartComponent } from './charts/doughnut-chart';
import { PolarAreaChartComponent } from './charts/polar-area-chart';
import { BarChartComponent } from './charts/bar-chart';
import { LineChartComponent } from './charts/line-chart';
import { RadarChartComponent } from './charts/radar-chart';

import { AppComponent } from './app.component';
import { DonneesComponent }	from './donnees.component';
import { DonneesTraitementComponent }	from './donnees.traitement.component';
import { AnalyzeService } from './analyze.service';
import { AideComponent }  from './aide.component';
import { PartageComponent } from './partage.component';
import { ProfilComponent } from './profil.component';

@NgModule({
  declarations: [
    AideComponent,
    AppComponent,
	DonneesComponent,
	DonneesTraitementComponent,
	PieChartComponent,
	DoughnutChartComponent,
	PolarAreaChartComponent,
	BarChartComponent,
	LineChartComponent,
	RadarChartComponent,
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
	ButtonsModule.forRoot(),
	AlertModule.forRoot(),
	TooltipModule.forRoot()
  ],
  providers: [
    AnalyzeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
