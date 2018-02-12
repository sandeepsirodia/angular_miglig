import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {HttpApiService} from './http-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
	constructor (private httpClient : HttpClient, private  apis : HttpApiService) {}
	
}
