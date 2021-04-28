import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    UsersComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
