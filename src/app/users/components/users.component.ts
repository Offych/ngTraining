import { Component, OnInit, Input, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { IUsers } from 'src/app/users.interface';
import { UsersService } from 'src/app/services/users.service';
import { CardComponent } from 'src/app/shared/card/components/card/card.component';

@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public heroes: IUsers[] = [];
  showMales: boolean = true;
  
  @ViewChild(CardComponent) cart: CardComponent;
  @ViewChild('cardComp') card: ElementRef;
  @ViewChildren('cardComp') allCards: QueryList<ElementRef>;

  constructor(private usersService: UsersService) {}

    ngOnInit(): void {
      this.heroes = this.usersService.getUsers();
      
    }
    ngAfterViewInit() {
      /* setTimeout(() =>{
        console.log(this.card)
        console.log(this.allCards)
      }, 0) */
    }

    hideMales(): void {
      this.showMales = !this.showMales;
    }
    onChanged() {
      //console.log('You did this')
    }
    handler() {

    }

}