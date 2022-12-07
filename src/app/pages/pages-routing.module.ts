import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,
  children: [
    { path:"profile", component : ProfileComponent },
     { path:"manageuser", component : ManageUserComponent }
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
