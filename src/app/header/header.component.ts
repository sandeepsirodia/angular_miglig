import { Component, OnInit, Directive } from '@angular/core';
import {HttpApiService} from '../http-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
	broadcast : boolean;

	constructor(private  apis : HttpApiService) { }

	ngOnInit() {
		this.broadcast_allot(this.apis.verify())
	}

	broadcast_allot(broadcast) {
		this.broadcast = broadcast
	}

	LogoutFunction(event){

	}


	myFunction(event) {
	    var x = document.getElementById("Topnav");
	    if (x.className === "topnav row") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav row";
	    }
	}

	headerFunction() {
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));

		var token = currentUser.token;
		this.apis.post_api(currentUser.token, "/user/logout/").subscribe((data) => { window.location.href='/'
 })
	}
	toggleFunction(event) {
		var x = document.getElementById("Topnav");
		if (x.className === "topnav row responsive") {
			x.className = "topnav row";
		}
	}
}
