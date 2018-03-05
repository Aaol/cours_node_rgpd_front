import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserRegister } from '../Models/user-register';
import { Observable } from 'rxjs/Observable';
import { UserRegisterReponse } from '../Models/user-register-response';
@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  register(user: UserRegister): Observable<UserRegisterReponse> {
    return this.httpClient.post<UserRegisterReponse>(environment.apiUrl + 'register', user);
  }

  logIn() {

  }
  logOff() {
  }
}
