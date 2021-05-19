import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, NgForm} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {UserAddComponent} from '../user-add/user-add.component';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: IUsers;



  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getUser(id);
      }
    )
  }

  getUser(id: number): void {
    this.usersService.getUser(id).subscribe({
      next: user => this.user = user
    });
  }

  onUpdateUser(user) {
    this.usersService.updateUser(user).subscribe(
    );
  }

}
