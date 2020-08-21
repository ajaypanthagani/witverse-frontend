import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  errors = {

    'username' : '',
    'password' : ''

  };

  //messages object
  messages = {

    'username': {

      'required':      'username is required.',

    },
    'password': {

      'required':      'password is required',

    }

  };

  response = {

    message : '',
    error : ''

  }

  constructor(private fb : FormBuilder, private auth : AuthService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {

    this.createForm();
    
  }

  createForm(){

    this.form = this.fb.group({
      username : ['', [Validators.required]],
      password : ['', [Validators.required]]
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

    const credentials = this.form.value;

    this.auth.login(credentials)
      .subscribe(
        (response : any) => {

          console.log(response);

          this.response.message = response.message;

          this.spinner.hide();

        },
        (error) => {

          console.log(error);
          this.response.error = 'invalid username or password';

          this.spinner.hide();
        }
      );
    
    this.form.reset();
  }

  
}
