import { CanDeactivate } from '@angular/router';
import { UserAddComponent } from './user-add.component';


export class UserAddGuard implements CanDeactivate<UserAddComponent> {
    canDeactivate(component: UserAddComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        throw new Error("Method not implemented.");
    }


}
