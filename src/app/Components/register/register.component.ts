import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../Models/user-register';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordMatchValidator } from './passwordMatchValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model: UserRegister = new UserRegister();
  public registerForm: FormGroup;
  public confirmPassword = '';

  constructor() {
    this.registerForm = new FormGroup({
      'email': new FormControl(this.model.email, [
        Validators.required,
        Validators.email
      ]),
      'username': new FormControl(this.model.userName, [
        Validators.required
      ]),
      'password': new FormControl(this.model.password, [
        Validators.required
      ]),
      'confirm': new FormControl(this.confirmPassword, [
        Validators.required
      ])
    }, {validators: PasswordMatchValidator('password', 'confirm')});
  }
  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirm() { return this.registerForm.get('confirm'); }

  ngOnInit() {
  }
}
