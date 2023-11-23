import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import URLS from './urls';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http:HttpClient) { }

  register(user:User){
    this._http.post<User>(URLS.register,user)
  }
}
