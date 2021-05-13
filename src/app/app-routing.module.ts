import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './users/components/user-detail/user-detail.component';
import { UsersDetailGuard } from './users/users-detail.guard';
import {RxjsComponent} from './components/rxjs/rxjs.component';
import {UsersComponent} from './users/users.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'rxjs', component: RxjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
