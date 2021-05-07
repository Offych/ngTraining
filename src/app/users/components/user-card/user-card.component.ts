import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../add-user/user.model';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  users: IUsers[] = [];
  errorMessage: string;
  sub!: Subscription;
  
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.sub = this.usersService.getUsers().subscribe({
      next: users => this.users = users,
      error: err => this.errorMessage = err
    }
    )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
