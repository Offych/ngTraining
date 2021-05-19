import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ControlContainer, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import { AgeValidator } from '../../../shared/validators/age.validator';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'add-user',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  providers: [ValidationService]
})
export class UserAddComponent implements OnInit {
  users: IUsers[];
  message: string = "User has been saved successfully!"
  action: string = "Close"
  firstNameTracked: string = '';
  lastNameTracked: string = '';


  constructor(private router: Router, private validationService: ValidationService, private _snackBar: MatSnackBar,
              private usersService: UsersService) { }

  addUserForm: FormGroup;

  ngOnInit(): void {
      this.addUserForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        age: new FormControl('', [Validators.required, AgeValidator.age(15, 100)]),
        company: new FormControl('', Validators.maxLength(35)),
        email: new FormControl('', [Validators.email, this.gmailValidator], [this.emailAsyncServiceValidation.bind(this)]), // gmailDomainValidator
        department: new FormControl('', Validators.required),
        photo: new FormControl(null),
        gender: new FormControl('Male')
      })
      this.addUserForm.get('firstName').valueChanges.subscribe( data => {
        this.firstNameTracked = data;
      })
      this.addUserForm.get('lastName').valueChanges.subscribe(data => {
        this.lastNameTracked = data;
      })
  }

  populateData(): void {
    this.addUserForm.patchValue({
      firstName: 'Sashka',
      lastName: 'Smotr',
      age: 44,
      company: 'IS Soft',
      email: 'off@1.com',
      department: 'FrontEnd Dep',
    })
  }

  onSubmit() {
    const controls = this.addUserForm.controls;

    if(this.addUserForm.invalid) {
        Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this._snackBar.open(this.message, this.action)

    //localStorage.setItem('user', JSON.stringify(this.addUserForm.value));

    setTimeout(() => {
      this.router.navigate(['/users']);
    }, 2000)

    const newUser: IUsers = {
      firstName: this.addUserForm.get('firstName').value,
      lastName: this.addUserForm.get('lastName').value,
      age: this.addUserForm.get('age').value,
      company: this.addUserForm.get('company').value,
      email: this.addUserForm.get('email').value,
      department: this.addUserForm.get('department').value,
      photo: this.addUserForm.get('photo').value,
      gender: this.addUserForm.get('gender').value
    }
    //console.log(newUser)
    this.usersService.addUser(newUser).subscribe((user) => {
      this.users.push(user)
    })

  }

  checkFormControlField(controlName: string): boolean {
    let control = this.addUserForm.controls[controlName];
    let checked = control.invalid && control.touched;
    return checked;
  }

  private emailAsyncServiceValidation(control: AbstractControl): Observable<ValidationErrors> {
    return this.validationService.checkForUniqueAddress(control.value);
  }

  public getControl(controlName) {
    return this.addUserForm.get(controlName);
  }

  private gmailValidator(control: AbstractControl): ValidationErrors {
    if(control.value && (!control.value.includes('gmail.com'))) {
      return { notGmail: true } as ValidationErrors
    }
    return null;
  }

}
