import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Form, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {UserAddComponent} from '../user-add/user-add.component';
import {AgeValidator} from '../../../shared/validators/age.validator';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: IUsers;
  editUserForm: FormGroup;
  subject: ReplaySubject<any>

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) {
    this.editUserForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      company: new FormControl(''),
      email: new FormControl(''),
      department: new FormControl(''),
      photo: new FormControl(null),
      gender: new FormControl()
    })
  }

  ngOnInit(): void {


    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getUser(id);
      })

    this.editUserForm.valueChanges.subscribe(data =>
     console.log(data))
  }

  getUser(id: number): void {
    this.usersService.getUser(id).subscribe({
      next: user => this.user = user
    });
  }

  onUpdateUser(user) {
    this.usersService.updateUser(user)
  }
}
