import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserRegister } from '../Models/user-register';
import { Observable } from 'rxjs/Observable';
import { UserRegisterReponse } from '../Models/user-register-response';
import {UserLogin} from "../Models/user-login";
@Injectable()
export class UserService {

  public user: UserRegister;

  constructor(private httpClient: HttpClient) {

  }

  register(user: UserRegister): Observable<UserRegisterReponse> {
    return this.httpClient.post<UserRegisterReponse>(environment.apiUrl + 'register', user);
  }

  logIn(user: UserLogin) {
    this.user = new UserRegister;
    this.user.userName = user.login;
    this.user.password = user.password;
    this.user.email = 'unknown';
  }

  logOff() {
    this.user = new UserRegister;
  }


}
