import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserLogin } from '../../Models/user-login';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public model: UserLogin;

  constructor(private userService: UserService
    , private router: Router
    , public dialogRef: MatDialogRef<LogInComponent>) {
    this.model = new UserLogin();
  }

  ngOnInit() {
  }

  register() {
    this.dialogRef.close();
    this.router.navigate(['register']);
  }

  login() {
    this.userService.logIn(this.model)
    .subscribe(res => console.log(res));
  }

}
