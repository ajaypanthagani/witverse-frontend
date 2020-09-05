import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { NgxSpinnerService } from 'ngx-spinner'
import { MatDialog } from '@angular/material/dialog';
import { EmailConfirmationMessageComponent } from '../email-confirmation-message/email-confirmation-message.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;

  errors = {

    'firstname' : '',
    'lastname' : '',
    'username' : '',
    'email' : ''

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
      'pattern' : 'special characters or spaces are not allowed'

    },
    'email': {

      'required': 'email is required',
      'pattern' : 'please enter a valid email address'

    }

  };

  response = {

    message : '',
    error : ''

  }

  constructor(
    private fb : FormBuilder, 
    private auth : AuthService,
    private snackbar : MatSnackBar,
    private spinner : NgxSpinnerService,
    private dialog : MatDialog
    ) { 

      this.createForm();

    }

  ngOnInit(): void {
    
  }

  createForm(){

    this.form = this.fb.group({
      firstname : ['', [Validators.required]],
      lastname : ['', [Validators.required]],
      username : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    })

    this.form.valueChanges
    .subscribe( data => this.onChange(data));

  }

  // form validation function
  onChange(data?: any) {
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

  submit(){

    this.spinner.show();

    this.response.message = '';
    this.response.error = '';

    const data = this.form.value;

    this.auth.register(data)
      .subscribe(
        (response : any) => {

          console.log(response);

          this.response.message = response.status;

          this.dialog.open(EmailConfirmationMessageComponent);
          this.openSB(response.status + ' login to continue', 'OK');

          this.spinner.hide();

        },
        (error) => {

          console.log(error);
          this.response.error = error.error.message;

          this.spinner.hide();

        }
      );
    
    this.form.reset();
  }

  openSB(message, action){

    this.snackbar.open(message, action);

  }
}
