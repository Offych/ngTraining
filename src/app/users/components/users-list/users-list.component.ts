import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'))
  
  constructor() { }

  ngOnInit(): void {
    for (const key in this.user) {
      console.log(`${key}: ${this.user[key]}`);
  } 
  }
}
