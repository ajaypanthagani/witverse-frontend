import { Component, OnInit, Input } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { DataService } from '../../services/data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { urls } from '../../resources/urls';

//keycodes import
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';


// form builder import
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// MatChipInput import
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss']
})
export class QuoteCreateComponent implements OnInit {

  @Input()
  quote;

  base_url = urls.base_url;
  user : any;

  form : FormGroup;

  //errors array
  errors = {

    'text' : '',
    'emotion' : '',
    'tags' : ''

  };

  //messages object
  messages = {

    'text': {

      'required':      'quote is required.',
      'minlength':     'min. 20 characters required.',
      'maxlength':     'max. 280 characters allowed.'

    },
    'emotion': {

      'required':      'emotion required',

    },
    'tags': {

      'required':      'tags required.',

    }
  };

  //seperator keys
  tagSeperatorKeys = [ COMMA, ENTER, SPACE]

  constructor(
    private formBuilder : FormBuilder, 
    private quoteService : QuoteService,
    private data : DataService,
    private snackbar : MatSnackBar) { 

    //creating reactive form
    this.createForm();

    this.user = data.getUser();
  }

  ngOnInit(): void {

    //initializing form data
    this.init();

  }

  // form creation function
  createForm(){

    this.form = this.formBuilder.group({

      text : ['', [Validators.required, Validators.minLength(20), Validators.maxLength(280)]],
      emotion : ['', [Validators.required]],
      tags : [[], [Validators.required]]

    });

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

  // tags field helper funtion start
  addTag(event : MatChipInputEvent) : void{

    const controller = this.form.controls['tags'];

    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      
      controller.value.push(value);
    }

    if (input) {
      input.value = '';
    }

    controller.markAsDirty();
    controller.updateValueAndValidity();

  }

  removeTag(tag : string) : void {

    const controller = this.form.controls['tags'];

    const index = controller.value.indexOf(tag);

    if (index >= 0) {
      controller.value.splice(index, 1);
    }

    controller.markAsDirty();
    controller.updateValueAndValidity();

  }
  // tags field helper function ends


  // emotion field helper function starts
  selectEmotion(emotion){

    const controller  = this.form.controls['emotion'];

    controller.setValue(emotion);

    controller.updateValueAndValidity();

  }

  isEmotion(emotion){
    
    const controller  = this.form.controls['emotion'];

    return controller.value === emotion;

  }
  // emotion field helper function ends


  // submit function starts
  submit(){

    const data = this.form.value;

    // logic to check if update or create
    if(this.quote){

      this.quoteService.put(this.quote._id, data)
      .subscribe(

        (quote) => {

          this.quote = quote;

          this.data.quotes.forEach((element, index) => {

            if(element._id === this.quote._id){

              this.data.quotes[index] = quote;

            }
          });

          this.snackbar.open('quote updated successfuly', 'OK');
        },
        (error) => {

          console.log(error);

          this.snackbar.open('couldn\'t update quote', 'OK');
        }
      )
  
    }
    else{

      this.quoteService.post(data)
      .subscribe(

        (quote) => {
          
          this.data.insertQuotes([quote]);
          this.snackbar.open('quote created succesfully', 'OK');

        },
        (error) => {

          console.log(error);
          this.snackbar.open('couldn\'t create quote', 'OK');
        }
      )

      this.clear(this.form);
    }
    
  }
  // submit function ends

  // clear function starts
  clear(form){

    form.reset();

  }

  // function to initialize form data if quote as input is given
  init(){

    if(this.quote){

      this.form.controls['text'].setValue(this.quote.text);
      this.form.controls['emotion'].setValue(this.quote.emotion);
      this.form.controls['tags'].setValue(this.quote.tags);

    }
  }
}
