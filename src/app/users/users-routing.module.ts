import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserEditShellComponent} from './components/user-edit-shell/user-edit-shell.component';
import {UserEditGuard} from './components/user-edit-shell/user-edit.guard';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
      { path: '', component: UsersComponent },
      { path: 'users/:id', component: UserDetailComponent},
      { path: 'users/:id/:edit', component: UserEditShellComponent, canDeactivate: [UserEditGuard]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
