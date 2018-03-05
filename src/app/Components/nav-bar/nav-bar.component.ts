import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
  }

  logIn() {
    this.dialog.open(LogInComponent);
  }

}
