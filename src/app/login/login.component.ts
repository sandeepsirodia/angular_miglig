import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm
} from '@angular/forms';

import {HttpApiService} from '../http-api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Location} from '@angular/common';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
	form: FormGroup;
	private formSubmitAttempt: boolean;
	private data :any; 
	public broadcast : boolean;

	constructor(private formBuilder: FormBuilder, private  apis : HttpApiService, private location: Location) { }

	ngOnInit() {
		if (this.apis.verify()) {
			window.location.href='/'
		}

		this.form = this.formBuilder.group({
			email_mobile: [null, Validators.required],
			password: [null, [Validators.required]],
		});
	}



	set_user(data){
		console.log(data)
		localStorage.setItem('currentUser', JSON.stringify({
			token: data.token,
			email: data.data.email,
			mobile: data.data.mobile,
			name: data.data.name,
		}));
		console.log("go")
		window.location.href='/'

	}
  

	onSubmit(f: NgForm) {
		this.formSubmitAttempt = true;
		if (this.form.valid) {
			let api_data = f.value
			console.log(api_data)
			var data = this.apis.post_api(api_data, "/user/login/").subscribe((data) => { this.data = data; this.set_user(data) })			
			
		} else {
			this.validateAllFormFields(this.form); 
		}
	}

	validateAllFormFields(formGroup: FormGroup) {         
	  Object.keys(formGroup.controls).forEach(field => {  
	    const control = formGroup.get(field);             
	    if (control instanceof FormControl) {             
	      control.markAsTouched({ onlySelf: true });
	    } else if (control instanceof FormGroup) {        
	      this.validateAllFormFields(control);            
	    }
	  });
	}

	isFieldValid(field: string) {
	  return (!this.form.get(field).valid && this.form.get(field).touched) ||
	    (this.form.get(field).untouched && this.formSubmitAttempt);
	}

	displayFieldCss(field: string) {
	  return {
	    'has-error': this.isFieldValid(field),
	    'has-feedback': this.isFieldValid(field)
	  };
	}

	reset() {
		this.form.reset();
		this.formSubmitAttempt = false;
	}

	signup_relocate() {
		window.location.href='/signup'
	}

}
