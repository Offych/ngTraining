import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/components/card/card.component';
import { MatCheckboxModule}  from '@angular/material/checkbox';




@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
