import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpApiService {
	apiRoot: string = "http://api.miglig.com/api/user/signup";
	constructor(private http:HttpClient) { }
	
	signup_api(json_api) {
		console.log(json_api)
  //       return this.http.post(this.apiRoot, json_api).subscribe(res => console.log(res));
    }

}
