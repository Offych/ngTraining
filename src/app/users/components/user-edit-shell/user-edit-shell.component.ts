import { Component, OnInit, ViewChild } from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormComponent} from '../user-form/user-form.component';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'user-edit-shell',
  templateUrl: './user-edit-shell.component.html',
  styleUrls: ['./user-edit-shell.component.scss']
})
export class UserEditShellComponent implements OnInit {

  users: IUsers[];
  user: IUsers;
  userId: number;

  obs = new ReplaySubject();

  @ViewChild(UserFormComponent) UsersFormComponent: UserFormComponent;

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
              ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.userId = +params.get('id');
        this.usersService.getUser(this.userId).
        subscribe(user => this.UsersFormComponent.userForm.patchValue(user))
      })
  }

  onUpdateUser(): void {
      const user = this.UsersFormComponent.userForm.value;
      this.obs.subscribe(v => console.log(v))
      this.obs.next(user);
      this.usersService.updateUser(this.userId, user).subscribe()
  }

}
