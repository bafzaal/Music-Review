import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable} from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedItem: User|{}={};
  users: User[];
  registerUserData: User|{}={};
  readonly baseURL = 'http://localhost:8080/api/open/register'

  constructor(private http : HttpClient) { }

  register(User)
  {
    return this.http.post(this.baseURL, User);
  }

}
