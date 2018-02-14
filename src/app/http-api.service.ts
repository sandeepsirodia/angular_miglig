import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable()

export class HttpApiService {
	
	apiRoot: string = "http://api.miglig.com/api";
	public values: any[];

	public broadcast : boolean;

	constructor(private http : HttpClient) { }

	post_api(json_api: any, url_api : string) {
        return this.http.post(this.apiRoot + url_api, json_api);
    }

    public verify() {
    	var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    	if (currentUser) {
	        return this.http.post(this.apiRoot + "/user/verify_customer/",  {"token" : currentUser.token,}).subscribe((data : any) => { 
				if(data.result){
					return true;
				}else{
					return false;
				}
				
			})	
		}else{
			return false;
		}		
    }

}
