import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { UsersListComponent } from './users/components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './users/components/user-detail/user-detail.component';
import { UsersDetailGuard } from './users/users-detail.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id',
    canActivate: [UsersDetailGuard],
    component: UserDetailComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
