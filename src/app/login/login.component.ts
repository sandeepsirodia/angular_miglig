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
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  form: FormGroup;
  private formSubmitAttempt: boolean;
  private data :any; 

  constructor(private formBuilder: FormBuilder, private  apis : HttpApiService) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			email_mobile: [null, Validators.required],
			password: [null, [Validators.required]],
		});
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		console.log(currentUser.token)

		var token = currentUser.token;
		this.apis.post_api(currentUser.token, "/user/verify_customer/") 

		
	}

	set_user(data){
		console.log(data)
		localStorage.setItem('currentUser', JSON.stringify({
			token: data.token,
			email: data.data.email,
			mobile: data.data.mobile,
			name: data.data.name,
		}));
	}
  

	onSubmit(f: NgForm) {
		this.formSubmitAttempt = true;
		if (this.form.valid) {
			let api_data = f.value
			console.log(api_data)
			var data = this.apis.post_api(api_data, "/user/login/").subscribe((data) => { this.data = data; this.set_user(data) })			
			
		} else {
			this.validateAllFormFields(this.form); //{7}
		}
	}

	validateAllFormFields(formGroup: FormGroup) {         //{1}
	  Object.keys(formGroup.controls).forEach(field => {  //{2}
	    const control = formGroup.get(field);             //{3}
	    if (control instanceof FormControl) {             //{4}
	      control.markAsTouched({ onlySelf: true });
	    } else if (control instanceof FormGroup) {        //{5}
	      this.validateAllFormFields(control);            //{6}
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

}
