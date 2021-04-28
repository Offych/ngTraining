import { Component, OnInit, Input } from '@angular/core';
import { IUsers } from 'src/app/users.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  pageTitle: string = "Welcome to the Users Component!";
  public heroes: IUsers[] = [];
  
  showCards = true;
  hidden = false;
  
  constructor(private usersService: UsersService) {}

    toggleShow() {
      this.showCards = !this.showCards;
    } 
    toggleHidden() {
      this.hidden = !this.hidden;
    }
    
    ngOnInit(): void {
      this.heroes = this.usersService.getUsers();
      //console.log(this.users)
    }
}