import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'add-user',
  templateUrl: './user-add-shell.component.html',
  styleUrls: ['./user-add-shell.component.scss'],
})
export class UserAddShellComponent implements OnInit {


  users: IUsers[];
  message: string = "User has been saved successfully!";
  action: string = "Close";

  @ViewChild(UserFormComponent) UserFormComponent: UserFormComponent;

  constructor(private router: Router, private _snackBar: MatSnackBar,
              private usersService: UsersService) { }

  ngOnInit(): void { }

  onSubmit(): void {

    if(this.UserFormComponent.userForm.invalid) {
      this.UserFormComponent.userForm.markAllAsTouched();
    }

    const user: IUsers = this.UserFormComponent.userForm.value;
    this.usersService.addUser(user).subscribe((user) => {
      this.users.push(user)
    });

    this._snackBar.open(this.message, this.action);

    setTimeout(() => {
      this.router.navigate(['/users']);
    }, 2000)
  }

}



