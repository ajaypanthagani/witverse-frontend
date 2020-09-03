import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommentService } from '../services/comment.service';

import { urls } from '../../resources/urls';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  comment : any;

  @Input()
  quoteId : any;

  url : any;

  constructor(
    private commentService : CommentService,
    private snackbar : MatSnackBar,
    private ref : ChangeDetectorRef
  ) {
    
    this.url = urls.base_url;

  }

  ngOnInit(): void {
  }

  delete(){

    this.commentService.delete(this.quoteId, this.comment._id)
    .subscribe(

      (resp) => {

        this.comment = null;

        this.openSB('comment deleted succesfully', 'OK');

        this.ref.markForCheck();
        
      },
      (error) => {

        this.openSB('could\'t delete comment', 'OK');
      }
    )
  }

  openSB(msg, action){

    this.snackbar.open(msg, action);
  }

}
