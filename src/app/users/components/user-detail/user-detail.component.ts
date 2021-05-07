import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsers } from '../add-user/user.model';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  pageTitle: string = 'User Detail';
  
  @Input()
  user: IUsers[];
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` : ${id}`
  }
  
  onBack(): void {
    this.router.navigate(['/users'])
  }

}
