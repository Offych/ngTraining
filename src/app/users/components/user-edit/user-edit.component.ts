import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: IUsers;
  public testSubject = new Subject();


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
   /* const param = this.route.snapshot.paramMap.get('id');
    if(param) {
      const id = +param;
      this.getUser(id);
    }*/
  }
  getUser(id: number): void {
    this.usersService.getUser(id).subscribe({
      next: user => this.user = user
    });
  }

}
