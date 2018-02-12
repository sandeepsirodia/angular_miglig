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

	myFunction(event) {
	    var x = document.getElementById("Topnav");
	    if (x.className === "topnav row") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav row";
	    }
	}

	headerFunction() {

	}
	toggleFunction(event) {
		var x = document.getElementById("Topnav");
		if (x.className === "topnav row responsive") {
			x.className = "topnav row";
		}
	}
}
