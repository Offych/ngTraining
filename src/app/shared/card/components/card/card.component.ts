import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { IUsers } from 'src/app/users.interface';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heroData: IUsers;
  @Output() onChangedGender = new EventEmitter<boolean>();
  
  @ViewChild('checkBox', {static: false}) checkBoxRef: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  changeGender() {
    this.heroData.gender = true;
    this.onChangedGender.emit();
  }
  
  checkAge() {
   if(this.heroData.age < 18) {
      return true;
   }
   return false;
 }
 onCheckboxEvent(e) {
   //console.log(e)
 }
 focusCheckboxes() {
  //console.log(this.checkBoxRef.nativeElement.checked)

 }
}
