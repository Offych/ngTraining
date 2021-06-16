import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../user.model';
import {UsersService} from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tabs',
  templateUrl: './user-detail-tabs.component.html',
  styleUrls: ['./user-detail-tabs.component.scss']
})
export class UserDetailTabsComponent implements OnInit {
  pageTitle: string = 'Name: '
  fullName: string = '';
  user: IUsers

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

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

  showCompanyInfo() {
    this.router.navigate(['company-info'], {relativeTo: this.route})
  }
  showPersonalInfo() {
    this.router.navigate(['personal-info'], {relativeTo: this.route})
  }
  
  showContacts() {
    this.router.navigate(['contacts'], {relativeTo: this.route})
  }
}
