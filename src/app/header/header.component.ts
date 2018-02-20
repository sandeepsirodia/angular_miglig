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
		// this.broadcast_allot(this.apis.verify())
	}

	// broadcast_allot(broadcast) {
	// 	this.broadcast = broadcast
	// }

	LogoutFunction(event){
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));

		var token = currentUser.token;
			
		this.apis.post_api({"token" : token}, "/user/logout/").subscribe((data) => { 
			localStorage.removeItem('currentUser');
			window.location.href='/'
		})
	}


	myFunction(event) {
	    var x = document.getElementById("Topnav");
	    if (x.className === "topnav row") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav row";
	    }
	}

	toggleFunction(event) {
		var x = document.getElementById("Topnav");
		if (x.className === "topnav row responsive") {
			x.className = "topnav row";
		}
	}
}
