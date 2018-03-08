import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogInComponent } from '../log-in/log-in.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public user: string;

  constructor(private dialog: MatDialog
  , private userService: UserService) {
    this.userService.user.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  logIn() {
    this.dialog.open(LogInComponent);
  }
  logOff() {
    this.userService.logOff();
  }
}
