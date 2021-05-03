import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationService } from './validation.service';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  constructor(private router: Router, private validationService: ValidationService) { }

  addUserForm: FormGroup;

  ngOnInit(): void {
      this.addUserForm = new FormGroup({
      firstName: new FormControl('', Validators.required,),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
      company: new FormControl('', Validators.maxLength(35)),
      email: new FormControl('youraddress@', Validators.email),
      department: new FormControl('', Validators.required),
      photo: new FormControl(''),
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
    console.log('Saving data...');
    
    localStorage.setItem('user', JSON.stringify(this.addUserForm.value))
    this.router.navigate(['/users'])
  }
  
  checkFormControlField(controlName: string): boolean {
    let control = this.addUserForm.controls[controlName];
    let checked = control.invalid && control.touched;
    return checked; 
  }
}
