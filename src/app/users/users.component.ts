import { Component, OnInit } from '@angular/core';
import {UsersService} from './services/users.service';
import {IUsers} from './user.model';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: IUsers[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
        next: users => {
          this.users = users;
        }
      });
  }
}