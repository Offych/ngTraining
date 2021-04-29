import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../shared/card.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
