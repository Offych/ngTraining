import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../shared/card.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule
  ],
  exports: [
    UsersComponent,
    AddUserComponent
  ]
})
export class UsersModule { }
