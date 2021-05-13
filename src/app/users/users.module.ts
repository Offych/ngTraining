import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../shared/card.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component';
import {UserEditGuard} from './components/user-edit/user-edit.guard';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserEditComponent,
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
    RouterModule.forChild([
      { path: 'users', component: UsersComponent},
      { path: 'users/:id', component: UserDetailComponent},
      { path: 'users/:id/:edit', component: UserEditComponent,
        canDeactivate: [UserEditGuard]}
    ])
  ],
  exports: [
    UsersComponent,
    AddUserComponent
  ]
})
export class UsersModule { }
