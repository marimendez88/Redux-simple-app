import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private url = 'https://reqres.in/api';

  getUser() {
    return this.http
      .get(`${this.url}/users?/per_page=6`)
      .pipe(map((resp) => resp['data']));
  }
}
