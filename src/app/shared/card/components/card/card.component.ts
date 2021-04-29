import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUsers } from 'src/app/users.interface';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heroData: IUsers;
  @Output() onChangedGender = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  changeGender() {
    this.heroData.gender = true;
    this.onChangedGender.emit();
  }

}
