import {Component, OnInit, ViewChild} from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

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
    const param = this.route.snapshot.paramMap.get('id');
    console.log(param)
    if(param) {
      const id = +param;
      this.getUser(id);
    }
  }
  getUser(id: number): void {
    this.usersService.getUser(id).subscribe({
      next: user => this.user = user
    });
  }
}
