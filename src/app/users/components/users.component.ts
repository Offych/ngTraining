import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/users.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: IUsers[] = [];
  
  showCards = true;
  hidden = false;
  
  constructor(private usersService: UsersService) {}

    toggleShow() {
      this.showCards = !this.showCards;
    } 
    toggleHidden() {
      this.hidden = !this.hidden;
    }
    onI(i) {
      console.log(i)
    }
    
    ngOnInit(): void {
      this.users = this.usersService.getUsers();
      console.log(this.users)
    }
}