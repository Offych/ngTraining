import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth/auth/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthComponent} from '../auth/auth/auth.component';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  currentUser: string


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user;
      }
    )
  }


  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  get userName() {
    return this.authService.user.subscribe(user =>  console.log(user.email= this.currentUser) );
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth'])
  }
}
