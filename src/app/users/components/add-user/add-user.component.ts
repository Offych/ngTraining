import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ControlContainer, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
/* 
function gmailDomainValidator(control: FormControl) {
  let email = control.value;
  if(email && email.indexOf('@') != -1) {
    let [_, domain] = email.split('@');
      if(domain !== 'gmail.com') {
        return {
          emailDomain: {
            parsedDomain: domain
          }
        }
      }
      return null;
  }
} */

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [ValidationService]
})
export class AddUserComponent implements OnInit {
  durationInSeconds: number = 5;
  message: string = "User has been saved successfully!"
  action: string = "Close"
  
  constructor(private router: Router, private validationService: ValidationService, private _snackBar: MatSnackBar) { }

  addUserForm: FormGroup;

  ngOnInit(): void {
      this.addUserForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
      company: new FormControl('', Validators.maxLength(35)),
      email: new FormControl('youraddress@', [Validators.email, this.gmailValidator], [this.emailAsyncServiceValidation.bind(this)]), // gmailDomainValidator
      department: new FormControl('', Validators.required),
      photo: new FormControl(null),
      gender: new FormControl('Male')
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
    console.log(this.addUserForm.value);
    this._snackBar.open(this.message, this.action)
    localStorage.setItem('user', JSON.stringify(this.addUserForm.value))
    
    this.router.navigate(['/users'])
    
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
