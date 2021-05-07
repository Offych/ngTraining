import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../shared/card.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../components/heroes/users.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UsersListComponent,
    UserEditComponent,
    UserCardComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserModule,
    MatCardModule,
    MatRadioModule,
    RouterModule
  ],
  exports: [
    UsersComponent,
    AddUserComponent
  ]
})
export class UsersModule { }
