import { Injectable } from '@angular/core';
import { AnalyzeModel } from './analyze.models';
import { DONNEES } from './analyze.mock';
import { environment } from '../environments/environment';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

declare var moment: any;

@Injectable()
export class AnalyzeService {
	constructor(private http: Http) { }
	
	private previousOptions: any;
	private previousResults: Promise<AnalyzeModel>;
	
	private getApiPath(options:any) : string {
		var path = "/apps/persocloud/api/analyze?field=" + options.field;
		if(options.metakey != undefined) {
			path += "&metakey=" + options.metakey;
		}
		if(options.period != undefined) {
			path += "&period=" + moment(options.period.start, 'X').utc().toISOString() + ";" + moment(options.period.end, 'X').utc().toISOString();
		}
		if(options.group != undefined) {
			path += "&group=" + options.group;
		}
		console.log("Demande à l'API serveur : http://localhost:9104" + path);
		return path;
	}
	
	getAnalyze(options:any): Promise<AnalyzeModel> {
		if(this.previousOptions == options) { // Cache : Si les options de l'analyse n'ont pas changées, ont redonne les résultats précédents
			return this.previousResults;
		} 
		this.previousOptions = options;
		
		if(options.metakey == undefined && options.group == undefined) {
			options.metakey = "value";
		} else if(options.metakey == undefined && options.group != undefined) {
			options.metakey = options.group;
		}		
		
		// Si l'application a été compilé pour utilisé l'API moteur (http service)
		if(environment.analyze_service == "http") {	
    		var results = this.http.get(this.getApiPath(options))
				.toPromise()
				.then(response => response.json() as AnalyzeModel)				
				.catch(this.handleError);	
			this.previousResults = results;
			return results;
		}
		// Si l'application a éré compilé pour utilisé le dummy service
		else {
			return Promise.resolve(DONNEES());
		}
  	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}