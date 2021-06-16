import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/components/card/card.component';
import { MatCheckboxModule}  from '@angular/material/checkbox';
import { CustomPipe } from './pipes/custom.pipe';
import { ConcatStringsPipe } from './pipes/concat-strings.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    CardComponent,
    CustomPipe,
    ConcatStringsPipe,
    ReversePipe,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    CardComponent,
    CustomPipe,
    ReversePipe,
    ConcatStringsPipe
  ]
})
export class CardModule { }
