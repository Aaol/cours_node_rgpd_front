import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  public title: string;
  public objectToDelete: string;

  constructor(public dialogRef: MatDialogRef<ValidationComponent>
  , @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.objectToDelete = data.objectToDelete;
  }

  ngOnInit() {
  }

}
