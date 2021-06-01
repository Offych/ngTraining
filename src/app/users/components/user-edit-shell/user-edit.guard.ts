import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserEditShellComponent} from './user-edit-shell.component';

@Injectable({
  providedIn: 'root'
})
export class UserEditGuard implements CanDeactivate<UserEditShellComponent> {

  canDeactivate(
    component: UserEditShellComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm("Form has unsaved data! Are you sure?");
  }
}
