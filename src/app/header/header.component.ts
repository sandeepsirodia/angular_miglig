import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
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
