import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../shared/card.module';
import { UserAddShellComponent } from './components/user-add-shell/user-add-shell.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { UserEditShellComponent } from './components/user-edit-shell/user-edit-shell.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {UsersComponent} from './users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {UsersRoutingModule} from './users-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    UsersComponent,
    UserAddShellComponent,
    UserEditShellComponent,
    UserDetailComponent,
    UserFormComponent,
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
    MatCardModule,
    MatRadioModule,
    UsersRoutingModule,
    RouterModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
