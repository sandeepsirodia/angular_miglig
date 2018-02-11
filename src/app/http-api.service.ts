import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpApiService {
	apiRoot: string = "http://api.miglig.com/api";
	constructor(private http:HttpClient) { }
	
	post_api(json_api: JSON, url_api : string) {
        return this.http.post(this.apiRoot + url_api, json_api).subscribe((res : any)=> console.log(res) );
    }
}
