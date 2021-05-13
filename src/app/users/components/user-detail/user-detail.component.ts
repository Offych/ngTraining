import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsers } from '../../user.model';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({

  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  pageTitle: string = 'User Detail';

  user: IUsers;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) { }

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

  onBack(): void {
    this.router.navigate(['/users']);
  }
}
