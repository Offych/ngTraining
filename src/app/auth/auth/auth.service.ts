import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
     return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoaTuS0mwM0PBGpNz8HPqn7kO6EIHLN3U', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError),
       tap(responseData => {
         this.handleAuthProcess(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn)
       }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDoaTuS0mwM0PBGpNz8HPqn7kO6EIHLN3U',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }).pipe(catchError(this.handleError),
      tap(responseData => {
        this.handleAuthProcess(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn)
      }));
  }

  logout() {
    this.user.next(null);
  }


    private handleAuthProcess(email: string, userId: string, token: string, expiresIn: number,) {

    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if(!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage)
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email address exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
        break;
    }
    return throwError(errorMessage);
  }

}
