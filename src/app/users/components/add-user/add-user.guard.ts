import { CanDeactivate } from '@angular/router';
import { AddUserComponent } from './add-user.component';


export class AddUserGuard implements CanDeactivate<AddUserComponent> {
    canDeactivate(component: AddUserComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        throw new Error("Method not implemented.");
    }
    
    
}