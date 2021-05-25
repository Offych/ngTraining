import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ControlContainer, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import { AgeValidator } from '../../../shared/validators/age.validator';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {userData} from './user-data';

@Component({
  selector: 'add-user',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  providers: [ValidationService]
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;
  users: IUsers[];
  message: string = "User has been saved successfully!"
  action: string = "Close"

  constructor(private router: Router, private validationService: ValidationService, private _snackBar: MatSnackBar,
              private usersService: UsersService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const controls = this.userForm.controls;

    if(this.userForm.invalid) {
        Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this._snackBar.open(this.message, this.action)

    setTimeout(() => {
      this.router.navigate(['/users']);
    }, 2000)

    const newUser: IUsers = {
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      age: this.userForm.get('age').value,
      company: this.userForm.get('company').value,
      email: this.userForm.get('email').value,
      department: this.userForm.get('department').value,
      photo: this.userForm.get('photo').value,
      gender: this.userForm.get('gender').value
    }
    console.log(newUser)
    this.usersService.addUser(newUser).subscribe((user) => {
      this.users.push(user)
    })
  }

}



