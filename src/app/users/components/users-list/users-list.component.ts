import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, range, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../add-user/user.model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  
}
