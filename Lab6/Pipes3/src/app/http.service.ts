import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from "./user.model";
@Injectable()
export class HttpService{
  constructor(private http: HttpClient){ }
  getUsers() {
    return this.http.get<IUser[]>('assets/users.json');
  }
}
