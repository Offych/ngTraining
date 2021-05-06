import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { IHeroes } from 'src/app/heroes.interface';
import { UsersService } from 'src/app/services/users.service';
import { CardComponent } from 'src/app/shared/card/components/card/card.component';

@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public heroes: IHeroes[] = [];
  showMales: boolean = true;
  
  @ViewChildren(CardComponent) cards: QueryList<CardComponent>;
  
/*   @ViewChild('cardComp') card: ElementRef;
  @ViewChildren('cardComp') allCards: QueryList<ElementRef>; */

  constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        this.heroes = this.usersService.getHeroes();
    }

    hideMales(): void {
        this.showMales = !this.showMales;
    }
    
    onChanged() { }
    

    heroesActivationHandler() {
        this.cards.forEach(hero => hero.activateThisHero())
    }
}