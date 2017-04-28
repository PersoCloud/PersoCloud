import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-persocloud',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  envAnalyzeService = environment.analyze_service;
}
