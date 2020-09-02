import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { urls } from '../../resources/urls';

import { HttpEventType } from '@angular/common/http';

import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-display-image-selection',
  templateUrl: './display-image-selection.component.html',
  styleUrls: ['./display-image-selection.component.scss']
})
export class DisplayImageSelectionComponent implements OnInit {

  url : string;

  displayImage = null;

  displayImageURL : any;

  //status variables
  processing : boolean;
  progress  = 5;

  constructor(
    public data : DataService,
    private userService : UserService,
    private cd: ChangeDetectorRef,
    private spinner : NgxSpinnerService,
    private snackbar : MatSnackBar) {

    this.url = urls.base_url;

  }

  ngOnInit(): void {
  }


  onFileChange(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.displayImage = file;
 
    // File Preview
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload  = () => {

      this.displayImageURL = reader.result as string;

    }

    //upload
    this.submit();
  }

  submit(){

    const formData = new FormData();
    formData.append('displayImage', this.displayImage);                            

    this.processing = true;

    this.userService.changeDP(formData)
    .subscribe(

      (event) => {

        if(event.type === HttpEventType.UploadProgress){

          this.progress = event.loaded / event.total * 100;

        }

        if(event.type === HttpEventType.Response){

          this.data.user = event.body;
          this.processing = false;

        }
      },
      (error) => {

        this.openSB('couldn\'t update display image', 'OK');

        this.processing = false;

      }
    )
  }

  openSB(message, action){

    this.snackbar.open(message, action);

  }
}
