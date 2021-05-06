import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/components/users.component';
import { BindingsComponent } from './bindings/bindings.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { UsersListComponent } from './users/components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'users', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
