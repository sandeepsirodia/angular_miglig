import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	public profile :any[] = []; 
	constructor(private  apis : HttpApiService) { }
	
	ngOnInit() {
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		
		this.apis.post_api({"token" : currentUser.token,}, "/user/verify_customer/").subscribe((data : any) => { this.profile = data.data; console.log(data) })
		
	}

}
