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
    return this.http.get<IUsers[]>(this.usersUrl)
     // .pipe(
   //     tap(data => console.log('All' + JSON.stringify(data)))
     // )
  }

  getUser(id: number): Observable<IUsers> {
    return this.getUsers()
      .pipe(
     //   tap(data => console.log('Person :' + JSON.stringify(data))),
        map((users: IUsers[]) => users.find(user => user.id === id))
      );
  }

  addUser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.usersUrl, user, httpOptions);
  }

  updateUser(user: IUsers): Observable<IUsers> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put<IUsers>(url, user, httpOptions);
  }
}

