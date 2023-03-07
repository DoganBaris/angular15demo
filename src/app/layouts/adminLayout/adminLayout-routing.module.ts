// import { UserListComponent } from '../../users/userList/userList.component';
// import { PasswordResetComponent } from '../../passwordReset/passwordReset.component';
// import { OrganizationListComponent } from '../../organization/organizationList/organizationList.component';
// import { UserCreateComponent } from '../../users/userCreate/userCreate.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoCallComponent } from '../../videoCall/userCreate/userCreate.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'userList', component: UserListComponent },
  // { path: 'user-create', component: UserCreateComponent },
  // { path: 'organizationList', component: OrganizationListComponent },
  // { path: 'passwordReset', component: PasswordResetComponent },


  // { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule { }
