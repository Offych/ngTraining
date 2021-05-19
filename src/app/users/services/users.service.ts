import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsers} from '../user.model';
import {map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
    providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.usersUrl);
  }

  getUser(id: number): Observable<IUsers> {
    return this.getUsers()
      .pipe(
        map((users: IUsers[]) => users.find(user => user.id === id))
      );
  }

  addUser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.usersUrl, user, httpOptions);
  }

  updateUser(user: IUsers): Observable<IUsers> {
    return this.http.put<IUsers>(this.usersUrl + '/' + user.id, user);
  }
}

