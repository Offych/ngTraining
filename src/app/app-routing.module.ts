import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddShellComponent } from './users/components/user-add-shell/user-add-shell.component';
import { HomeComponent } from './components/home/home.component';
import {RxjsComponent} from './components/rxjs/rxjs.component';
import {AuthComponent} from './auth/auth/auth.component';
import {AuthGuard} from './auth/auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'addUser', component: UserAddShellComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'users', canActivate: [AuthGuard],
     loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, ) ], //{enableTracing: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
