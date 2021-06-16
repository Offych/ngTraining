import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth/auth/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthComponent} from '../auth/auth/auth.component';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

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
  get email() {
    return this.authService.user.getValue().email;
  }



  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth'])
  }
}
