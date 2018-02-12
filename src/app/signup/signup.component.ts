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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private formBuilder: FormBuilder, private  apis : HttpApiService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required]],
      password: [null, Validators.required],
      re_password: [null, Validators.required],
    },{Validators: this.checkIfMatchingPasswords('password', 're_password')});
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
      return (group: FormGroup) => {
        let passwordInput = group.controls[passwordKey],
            passwordConfirmationInput = group.controls[passwordConfirmationKey];
        if (passwordInput.value !== passwordConfirmationInput.value) {
          return passwordConfirmationInput.setErrors({notEquivalent: true})
        }
        else {
            return passwordConfirmationInput.setErrors(null);
        }
      }
    }

	onSubmit(f: NgForm) {
		this.formSubmitAttempt = true;
		if (this.form.valid) {
			let api_data = f.value
			console.log(api_data)
			this.apis.post_api(api_data, "/user/register/")
			window.location.href='/login'
			
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