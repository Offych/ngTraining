import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddShellComponent } from './users/components/user-add-shell/user-add-shell.component';
import { HomeComponent } from './components/home/home.component';
import {RxjsComponent} from './components/rxjs/rxjs.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addUser', component: UserAddShellComponent },
  { path: 'rxjs', component: RxjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
