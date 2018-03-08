import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserRegister } from '../Models/user-register';

import { UserRegisterReponse } from '../Models/user-register-response';
import { UserLoginResponse } from '../Models/user-login-response';
import { UserLogin } from '../Models/user-login';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { UserDelete } from '../Models/user-delete';
@Injectable()
export class UserService {

  private subject: ReplaySubject<string> = new ReplaySubject(1);
  public user: Observable<string>;
  constructor(private httpClient: HttpClient
  , private router: Router) {
    this.user = new Observable(observer => this.subject.subscribe(observer));
    const localUser = this.getUser();
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
        localStorage.setItem('id', response.id);
        this.subject.next(response.username);
      });
  }
  logOff() {
    localStorage.clear();
    this.subject.next(null);
    this.router.navigateByUrl('');
  }
  deleteAccount() {
    const params = new HttpParams().set('id', this.getUser());
    return this.httpClient.delete(environment.apiUrl + 'delete-user/' + this.getId());
  }

  private getUser() {
    return localStorage.getItem('user');
  }
  private getId() {
    return localStorage.getItem('id');
  }
}
