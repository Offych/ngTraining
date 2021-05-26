import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export class ValidationService {
  private serverEmails: string[];
  
  constructor() { 
    this.serverEmails = ['my1@gmail.com', 'off@1.com']
  }
  // This approach has been used and explained in Angular Training 
  public checkForUniqueAddress(userEmail: string): Observable<ValidationErrors> {
    return new Observable<ValidationErrors>(
      observer => {
        const email = this.serverEmails.find(address => address === userEmail);
        if(email) {
          observer.next({
            emailExist: true
          });
        }
        else {
          observer.next(null)
        }
        observer.complete()
      })
  }
}
