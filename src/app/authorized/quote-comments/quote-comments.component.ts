import { Component, OnInit, Inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { CommentService } from '../services/comment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quote-comments',
  templateUrl: './quote-comments.component.html',
  styleUrls: ['./quote-comments.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class QuoteCommentsComponent implements OnInit {

  quoteId : any;
  comments : any;

  //status variables
  processing : boolean;

  form : FormGroup;

    //errors array
    errors = {

      'text' : ''
  
    };
  
    //messages object
    messages = {
  
      'text': {
  
        'required':      'comment is required.',
  
      }

    };

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public bottomSheetData: any,
    private ref: ChangeDetectorRef,
    private commentService : CommentService,
    private fb : FormBuilder,
    private spinner : NgxSpinnerService,
    private snackbar : MatSnackBar) { 

    this.quoteId = bottomSheetData.quoteId;

    this.getComments(this.quoteId);

    this.createForm();

  }

  ngOnInit(): void {
  }

  // form creation function
  createForm(){

    this.form = this.fb.group({

      text : ['', [Validators.required]]

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

  submit(){

    const comment = this.form.value;

    this.spinner.show('submit-loader');

    this.commentService.post(this.quoteId, comment)
    .subscribe(
      (comments : []) => {

        this.comments = comments.reverse();

        this.form.reset();

        this.spinner.hide('submit-loader');

      },
      (error) => {

        this.openSB('couldn\'t post a comment', 'OK');

        this.spinner.hide('submit-loader');

      }
    )
  }


  getComments(quoteId){

    this.processing = true;

    this.commentService.getAll(quoteId)
    .subscribe(
      (comments : []) => {


        this.comments = comments.reverse();

        this.ref.markForCheck();

        this.processing = false;
      },
      (error) => {

        this.openSB('couldn\' fetch comments', 'OK');

        this.processing = false;

      }
    )
  }

  openSB(msg, action){

    this.snackbar.open(msg, action)
  }
}
