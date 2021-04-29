import { Component, OnInit, Input } from '@angular/core';
import { IUsers } from 'src/app/users.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public heroes: IUsers[] = [];
  
  showMales: boolean = true;

  constructor(private usersService: UsersService) {}

    ngOnInit(): void {
      this.heroes = this.usersService.getUsers();
    }

    hideMales(): void {
      this.showMales = !this.showMales;
    }
    onChanged() {
      console.log('You did this')
    }

}