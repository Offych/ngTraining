import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AgeValidator} from '../../../shared/validators/age.validator';
import {IUsers} from '../../user.model';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';
import {UsersService} from '../../services/users.service';
import {combineLatest, concat, forkJoin, merge, Observable} from 'rxjs';
import {combineAll, debounceTime, distinctUntilChanged, map, mergeAll, pairwise, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: IUsers;
  users: IUsers[];
  message: string = "User has been saved successfully!"
  action: string = "Close"

  userForm: FormGroup;
  fullNameForEmailInput: any;
  gmail: string = '@gmail.com'
  firstName: string;
  lastName: string;

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, AgeValidator.age(15, 100)]),
      company: new FormControl('', Validators.maxLength(35)),
      email: new FormControl('', [Validators.email, this.gmailValidator]), // gmailDomainValidator
      department: new FormControl('', Validators.required),
      photo: new FormControl(null),
      gender: new FormControl('Male')
    })

    const firstName$: any = this.userForm.get('firstName').valueChanges;
    const lastName$: any = this.userForm.get('lastName').valueChanges;
    combineLatest([firstName$, lastName$]).
      pipe(map(value => value.toString().replace(/,/g, '')))
      .pipe( data =>  this.fullNameForEmailInput = data).subscribe(
        data => this.userForm.get('email').patchValue(data + this.gmail)
    )

  }

  checkFormControlField(controlName: string): boolean {
    let control = this.userForm.controls[controlName];
    let checked = control.invalid && control.touched;
    return checked;
  }



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
