import { Injectable } from '@angular/core';
import { IUsers } from '../users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  
  public getUsers(): IUsers[] {
    return [
      {
        name: 'Thor',
        age: 1500,
        gender: true
      },
      {
        name: 'Tony Stark',
        age: 44,
        gender: true
      },
      {
        name: 'Natasha Romanova',
        age: 30,
        gender: false
      },
      {
        name: 'Vanda Witch',
        age: 25,
        gender: false
      }]
  }
}
