import { Component, OnInit, AfterViewInit } from '@angular/core';

export interface IUser {
    name: string;
    age: number;
    gender: boolean;
}
@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent {

    users: IUser[] = [{
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
  ]
}