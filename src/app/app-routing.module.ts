import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './users/components/user-add/user-add.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './users/components/user-detail/user-detail.component';
import { UsersDetailGuard } from './users/users-detail.guard';
import {RxjsComponent} from './components/rxjs/rxjs.component';
import {UsersComponent} from './users/users.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addUser', component: UserAddComponent },
  { path: 'rxjs', component: RxjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
