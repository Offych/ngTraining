import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AgeValidator} from '../../../shared/validators/age.validator';
import {IUsers} from '../../user.model';
import {Router} from '@angular/router';
import {ValidationService} from '../user-add/validation.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() userFormEmit: EventEmitter<any> = new EventEmitter<any>();
  users: IUsers[];
  message: string = "User has been saved successfully!"
  action: string = "Close"
  firstNameTracked: string = '';
  lastNameTracked: string = '';

  userForm: FormGroup;

  constructor(private router: Router, private _snackBar: MatSnackBar,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, AgeValidator.age(15, 100)]),
      company: new FormControl('', Validators.maxLength(35)),
      email: new FormControl('', [Validators.email, this.gmailValidator], ), // gmailDomainValidator
      department: new FormControl('', Validators.required),
      photo: new FormControl(null),
      gender: new FormControl('Male')
    })

    this.userFormEmit.emit(this.userForm)

  }

  checkFormControlField(controlName: string): boolean {
    let control = this.userForm.controls[controlName];
    let checked = control.invalid && control.touched;
    return checked;
  }

  //private emailAsyncServiceValidation(control: AbstractControl): Observable<ValidationErrors> {
   // return this.validationService.checkForUniqueAddress(control.value);
 // }

  public getControl(controlName) {
    return this.userForm.get(controlName);
  }

  private gmailValidator(control: AbstractControl): ValidationErrors {
    if(control.value && (!control.value.includes('gmail.com'))) {
      return { notGmail: true } as ValidationErrors
    }
    return null;
  }
}
