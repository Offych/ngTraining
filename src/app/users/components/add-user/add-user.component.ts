import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  constructor(private router: Router) {
    
  }
  addUserForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(100)]),
    company: new FormControl('', Validators.minLength(6)),
    email: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required)
  })
  
  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(JSON.stringify(this.addUserForm.value))
    localStorage.setItem('user', JSON.stringify(this.addUserForm.value))
    this.router.navigate(['/users'])
  }

}
