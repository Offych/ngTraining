import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserEditComponent} from './user-edit.component';

@Injectable({
  providedIn: 'root'
})
export class UserEditGuard implements CanDeactivate<UserEditComponent> {
  canDeactivate(
    component: UserEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return confirm("Form has unsaved data! Are you sure?");
  }
}
