import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IUsers } from '../components/add-user/user.model';
import { delay, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private usersUrl = 'api/users/users.json';
    
    constructor(private http: HttpClient) {}

    getUsers(): Observable<IUsers[]> {
        return this.http.get<IUsers[]>(this.usersUrl).pipe(
            tap(data => console.log('All: ' , JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `Something goes wrong... ${err.error.message}`
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is" ${err.message}`; 
        }
        console.error(errorMessage);
        return throwError(errorMessage)
    }
}