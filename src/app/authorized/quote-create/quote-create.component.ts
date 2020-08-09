import { Component, OnInit, Input } from '@angular/core';

//keycodes import
import {COMMA, ENTER} from '@angular/cdk/keycodes';


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
  tagSeperatorKeys = [ COMMA, ENTER]

  constructor(private formBuilder : FormBuilder) { 

    //creating reactive form
    this.createForm();

  }

  ngOnInit(): void {
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

    console.log(data);

    this.clear(this.form);
    
  }
  // submit function ends

  clear(form){

    form.reset();

  }
}
