import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LitigesFormComponent } from './litiges-form/litiges-form.component';
@Component({
  selector: 'app-litiges',
  templateUrl: './litiges.component.html',
  styleUrls: ['./litiges.component.css']
})
export class LitigesComponent implements OnInit {

  
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LitigesFormComponent, {
      width: '500px',height:'500px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  ngOnInit(): void {
  }

}
