import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {PasswordMatchValidator} from '../../shared/validators/password-matching.validator';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoggedInMode = true;
  isLoading = false;
  error: string = null;
  userAuthForm: FormGroup;
  userName: string;

  onSwitchMode() {
    this.isLoggedInMode = !this.isLoggedInMode;
  }
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.userAuthForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.min(6)]),
        confirmPassword: new FormControl('', [Validators.required])
      }, PasswordMatchValidator.MatchPassword )
    })
  }

  get emailIsInvalidAndTouched() {
    let emailControl = this.userAuthForm.get('email');
    let checked = emailControl.invalid && emailControl.touched;
    return  checked;
  }
  get confirmPasswordsIsInvalidAndTouched() {
    let confirmPassword = this.userAuthForm.get('passwordGroup.confirmPassword');
    let checked = confirmPassword.invalid && confirmPassword.touched;
    return checked;
  }

  onSubmit() {

    const email = this.userAuthForm.get('email').value;
    const password = this.userAuthForm.get('passwordGroup').get('password').value;
    //const user = this.userAuthForm.get('userName').value;


    console.info(this.userAuthForm.value)
       let authData$: Observable<AuthResponseData>;

       if(!this.userAuthForm.valid) {
         return;
       }
       this.isLoading = true;

       if(this.isLoggedInMode) {
           authData$ = this.authService.login(email, password);
       } else {
           authData$ = this.authService.signUp(email, password);
       }

       authData$.subscribe(
         responseData => {
           console.log(responseData);
           this.isLoading = false;
           this.route.navigate(['/'])
         },
         errorMessage => {
           console.log(errorMessage);
           this.error = errorMessage;
           this.isLoading = false;
         }
       );
       this.userAuthForm.reset();
     }
}
