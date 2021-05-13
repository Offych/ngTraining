import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsers} from '../user.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'api/users/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.usersUrl)
      .pipe(
        tap(data => console.log('All' + JSON.stringify(data)))
      )
  }

  getUser(id: number): Observable<IUsers> {
    return this.getUsers()
      .pipe(
        tap(data => console.log('Person :' + JSON.stringify(data))),
        map((users: IUsers[]) => users.find(user => user.id === id))
      );
  }

}

