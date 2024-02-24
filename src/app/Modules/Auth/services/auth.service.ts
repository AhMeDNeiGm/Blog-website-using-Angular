import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GoToService } from '../../Shared/services/go-to.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _tokenValue!: string | null;
  private readonly _tokenKey: string = 'token';

  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router,
    private _GoToService: GoToService
  ) {
    this._tokenValue = localStorage.getItem(this._tokenKey);
  }

  private readonly _url = 'https://devjourney-restfulapi.onrender.com/devjourney/';

  readonly formControlsNames = {
    //#region 
    _id: '_id',
    firstname: 'firstname',
    lastname: 'lastname',
    occupation: 'occupation',
    location: 'location',
    bio: 'bio',
    username: 'username',
    email: 'email',
    phone: 'phone',
    age: 'age',
    password: 'password'
    //#endregion
  } as const;

  // !----------------- User register & login
  setRegister(userData: object): Observable<any> {
    return this._HttpClient.post(`${[this._url]}/signup`, userData)
  }

  setLogin(userData: object): Observable<any> {
    return this._HttpClient.post(`${[this._url]}/login`, userData)
  }

  logout(): void {
    this.clearToken();
    this._Router.navigate([this._GoToService.page.login]);
  }

  // !----------------- User token
  setToken(token: string): void {
    this._tokenValue = token;
    localStorage.setItem(this._tokenKey, token);
  }

  getToken(): string | null {
    return this._tokenValue;
  }

  clearToken(): void {
    this._tokenValue = null;
    localStorage.removeItem(this._tokenKey);
  }

}
