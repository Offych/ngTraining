import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserEditShellComponent} from './components/user-edit-shell/user-edit-shell.component';
import {UserEditGuard} from './components/user-edit-shell/user-edit.guard';
import {RouterModule, Routes} from '@angular/router';
import {CompanyInfoComponent} from './components/company-info/company-info.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const routes: Routes = [
      { path: '', component: UsersComponent },
      { path: 'users/:id', component: UserDetailComponent,
          children: [
            { path: 'company-info', component: CompanyInfoComponent },
            { path: 'personal-info', component: PersonalInfoComponent },
            { path: 'contacts', component: ContactsComponent },
        ]
    },
      { path: 'users/:id/:edit', component: UserEditShellComponent, canDeactivate: [UserEditGuard]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
