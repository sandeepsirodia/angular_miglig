import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
	private data :any; 
	public profile :any[] = []; 
	public formData:FormData = new FormData();
	public profile_form: FormGroup;
	private formSubmitAttempt: boolean;
	public uploader:FileUploader = new FileUploader({url: "URL", itemAlias: 'photo'});

	constructor(private  apis : HttpApiService) { }
	
	ngOnInit() {
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		
		this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };

		this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
			console.log("ImageUpload:uploaded:", item, status, response);
		};
		
		this.apis.post_api({"token" : currentUser.token,}, "/user/verify_customer/").subscribe((data : any) => { this.profile = data.data; console.log(data) })
		
	}

	// onSubmit(f: NgForm) {
	// 	this.formSubmitAttempt = true;
	// 	if (this.profile_form.valid) {
	// 		// let api_data = f.value
	// 		// console.log(api_data)
	// 		// var data = this.apis.post_api(api_data, "/user/update_profile/").subscribe((data) => { this.data = data;})			
			
	// 	} else {
	// 		this.validateAllFormFields(this.profile_form); //{7}
	// 	}
	// }

	// validateAllFormFields(formGroup: FormGroup) {         //{1}
	//   Object.keys(formGroup.controls).forEach(field => {  //{2}
	//     const control = formGroup.get(field);             //{3}
	//     if (control instanceof FormControl) {             //{4}
	//       control.markAsTouched({ onlySelf: true });
	//     } else if (control instanceof FormGroup) {        //{5}
	//       this.validateAllFormFields(control);            //{6}
	//     }
	//   });
	// }



	// isFieldValid(field: string) {
	//   return (!this.profile_form.get(field).valid && this.profile_form.get(field).touched) ||
	//     (this.profile_form.get(field).untouched && this.formSubmitAttempt);
	// }

	// displayFieldCss(field: string) {
	//   return {
	//     'has-error': this.isFieldValid(field),
	//     'has-feedback': this.isFieldValid(field)
	//   };
	// }

}
