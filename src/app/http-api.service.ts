import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class HttpApiService {
	
	apiRoot: string = "http://api.miglig.com/api";

	public values: any[];

	public broadcast : boolean;

	constructor(private http : HttpClient) { }

	post_api(json_api: JSON, url_api : string) {
        return this.http.post(this.apiRoot + url_api, json_api);
    }

    verify() {
    	var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		console.log(currentUser.token)

		var token = currentUser.token;

        this.http.post(this.apiRoot + "/user/verify_customer/", token).subscribe((data) => { console.log(data);
         // if(data.result){this.broadcast = true;}
		})			;
    }

}
