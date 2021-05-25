import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Form, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {UserAddComponent} from '../user-add/user-add.component';
import {AgeValidator} from '../../../shared/validators/age.validator';
import { ValidationService } from '../user-add/validation.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: IUsers;
  @Input('userEditForm') userForm: FormGroup;


  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
              ) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');

        this.getUser(id);

      })
  }

  getUser(id: number): void {
    this.usersService.getUser(id).subscribe({
      next: user => this.user = user
    });
  }

  onUpdateUser(): void {
    this.usersService.updateUser(this.user.id, this.user).subscribe(
      data => console.log(data)
    )
  }

}
