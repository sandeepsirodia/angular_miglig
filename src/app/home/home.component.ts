import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  apis : HttpApiService ) {}

  ngOnInit() {
  	if (!JSON.parse(localStorage.getItem('currentUser'))){
  		window.location.href='/login'
  	}

  	if (!this.apis.verify()) {
			window.location.href='/login'
		}
  	}

}
