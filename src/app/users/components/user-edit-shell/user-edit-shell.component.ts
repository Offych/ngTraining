import { Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserFormComponent} from '../user-form/user-form.component';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'user-edit-shell',
  templateUrl: './user-edit-shell.component.html',
  styleUrls: ['./user-edit-shell.component.scss']
})
export class UserEditShellComponent implements OnInit {

  users: IUsers[];
  user: IUsers;

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
        const id = +params.get('id');
        this.usersService.getUser(id).
        subscribe(user => this.UsersFormComponent.userForm.patchValue(user))
      })
  }


  onUpdateUser(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        const user = this.UsersFormComponent.userForm.value;
        this.obs.subscribe(v => console.log(v))
        this.obs.next(user);
        this.usersService.updateUser(id, user).subscribe()
      }
    )
  }

}
