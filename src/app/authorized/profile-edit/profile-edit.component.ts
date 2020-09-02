import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  form : FormGroup;
  passwordForm : FormGroup;

  errors = {

    'firstname' : '',
    'lastname' : '',
    'username' : '',
    'password' : ''

  };

  //messages object
  messages = {

    'firstname' : {
      'required': 'firstname is required.'
    },

    'lastname' : {
      'required': 'username is required.'
    },

    'username': {

      'required': 'username is required.',

    },
    'password': {

      'required': 'password is required',
      'minlength' : 'password should be minimum 8 characters long'

    }

  };

  response = {

    message : '',
    error : ''

  }

  constructor(
    private fb : FormBuilder,
    private userService : UserService, 
    private snackbar : MatSnackBar,
    private spinner : NgxSpinnerService,
    private location : Location,
    private data : DataService,
    private auth : AuthService
    ) { 

      this.createForms();

    }

  ngOnInit(): void {
    
  }

  createForms(){

    this.form = this.fb.group({
      firstname : [this.data.user.firstname, [Validators.required]],
      lastname : [this.data.user.lastname, [Validators.required]],
      username : [this.data.user.username, [Validators.required]]
    })

    this.form.valueChanges
    .subscribe( data => this.onFormChange(data));

    this.passwordForm = this.fb.group({
      oldPassword : ['', [Validators.required]],
      newPassword : ['', [Validators.required]]
    })

    this.passwordForm.valueChanges
    .subscribe( data => this.onPasswordFormChange(data));

  }

  // form validation function
  onFormChange(data?: any) {
    if (!this.form) { return; }
    const form = this.form;
    for (const field in this.errors) {
      if (this.errors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.errors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.messages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.errors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onPasswordFormChange(data?: any) {
    if (!this.passwordForm) { return; }
    const form = this.passwordForm;
    for (const field in this.errors) {
      if (this.errors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.errors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.messages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.errors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  submit(){

    this.spinner.show('formLoader');

    this.response.message = '';
    this.response.error = '';

    const data = this.form.value;

    this.userService.put(this.data.user._id, data)
    .subscribe(

      (user) => {

        this.data.user = user;
        this.openSB('updated succesully', 'OK');
        this.spinner.hide('formLoader');

      },
      (error) => {

        this.openSB('couldn\'t update user data', 'OK');
        this.spinner.hide('formLoader');

      }
    )
    
    // this.form.reset();
  }

  submitPassword(){

    this.spinner.show('passwordFormLoader');

    this.response.message = '';
    this.response.error = '';

    const passwords = this.passwordForm.value;

    this.auth.resetPassword(passwords)
    .subscribe(

      (response : any) => {

        this.openSB('passowrd changed succesfully', 'OK');
        this.spinner.hide('passwordFormLoader');

      },
      (error) => {

        this.openSB(error.error.message, 'OK');
        this.spinner.hide('passwordFormLoader');

      }
    )
    
    this.passwordForm.reset();
  }

  openSB(message, action){

    this.snackbar.open(message, action);

  }

  goBack(){

    this.location.back();

  }
}
