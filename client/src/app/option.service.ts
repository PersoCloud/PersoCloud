import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { ProfileModel } from './profile.model';
import { SharingPermissionsModel } from './analyze.availableData';
import { Observable } from "rxjs/Rx";

@Injectable()
export class OptionService {
	constructor(private http: Http) { }
	
	private previousProfile: Promise<ProfileModel>;
	private previousSharingPermissions: Promise<SharingPermissionsModel>;
	
	private getApiPath(option:string) : string {
		var path = "/apps/persocloud/api/" + option;
		console.log("Demande à l'API serveur : http://localhost:9104" + path);
		return path;
	}
	
	getProfile(): Promise<ProfileModel> {		
		if(this.previousProfile != undefined) { // Cache
			return this.previousProfile;
		} 
		
		var results = this.http.get(this.getApiPath('profile'))
			.toPromise()
			.then(response => response.json() as ProfileModel)				
			.catch(this.handleError);
	
		this.previousProfile = results;
		return results;
  	}
	
	setProfile(profile: ProfileModel) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.getApiPath('profile'), JSON.stringify(profile), options);
	}
	
	getSharingPermissions(): Promise<SharingPermissionsModel[]> {
		if(this.previousSharingPermissions != undefined) { // Cache
			return this.previousSharingPermissions;
		} 

		var results = this.http.get(this.getApiPath('sharing_permissions'))
			.toPromise()
			.then(response => response.json() as SharingPermissionsModel[])				
			.catch(this.handleError);
			
		this.previousSharingPermissions = results;
		return results;
  	}
	
	setSharingPermissions(permissions: SharingPermissionsModel[]) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.getApiPath('sharing_permissions'), JSON.stringify(permissions), options);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}