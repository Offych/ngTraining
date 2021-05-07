import { Injectable } from '@angular/core';
import { IHeroes } from '../heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }
  
  public getHeroes(): IHeroes[] {
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
      },
      {
        name: 'Peter Parker',
        age: 17,
        gender: true
      },
      {
        name: 'SuperGirl',
        age: 12,
        gender: false
      }
    ]
  }
}
