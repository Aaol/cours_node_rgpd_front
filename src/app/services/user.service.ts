import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserRegister } from '../Models/user-register';

import { UserRegisterReponse } from '../Models/user-register-response';
import { UserLoginResponse } from '../Models/user-login-response';
import { UserLogin } from '../Models/user-login';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/do';
@Injectable()
export class UserService {

  private subject: ReplaySubject<string> = new ReplaySubject(1);
  public user: Observable<string>;
  constructor(private httpClient: HttpClient) {
    this.user = new Observable(observer => this.subject.subscribe(observer));
    const localUser = localStorage.getItem('user');
    if (localUser == null) {
      this.subject.next(null);
    } else {
      this.subject.next(localUser);
    }
  }

  register(user: UserRegister): Observable<UserRegisterReponse> {
    console.log(user);
    return this.httpClient.post<UserRegisterReponse>(environment.apiUrl + 'register', JSON.stringify(user));
  }

  newsletterStatus(idUser: string, enabled: boolean) {
    return this.httpClient.post(environment.apiUrl + 'enable-newsletter', { id: idUser });
  }

  logIn(user: UserLogin) {
    return this.httpClient.post<UserLoginResponse>(environment.apiUrl + 'sign/in', JSON.stringify(user))
      .do (response => {
        localStorage.setItem('user', response.username);
        this.subject.next(response.username);
      });
  }
  logOff() {
    localStorage.clear();
    this.subject.next(null);
  }
}
