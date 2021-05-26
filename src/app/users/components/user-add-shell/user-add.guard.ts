import { CanDeactivate } from '@angular/router';
import { UserAddShellComponent } from './user-add-shell.component';


export class UserAddGuard implements CanDeactivate<UserAddShellComponent> {
  canDeactivate(component: UserAddShellComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  }
}
