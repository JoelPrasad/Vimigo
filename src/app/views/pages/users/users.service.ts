import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  url = 'https://gorest.co.in/public/v2/users';
  constructor(private  http:HttpClient) {

  }

  addUser(user: UserModel) {
    let header = new HttpHeaders({ 'Authorization': 'Bearer 94eca09edff8313d5c26bf94fc5dc2ba095b295aa5939d0baac82586ff4c0d9f' });
    return this.http.post<any>(this.url, user, {headers:header});
  }
}
