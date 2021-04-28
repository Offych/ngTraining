import { Component, OnInit, Input } from '@angular/core';
import { IUsers } from 'src/app/users.interface';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heroData: IUsers;
  
  constructor() { }

  ngOnInit(): void {
    //console.log(this.heroData)
  }

}
