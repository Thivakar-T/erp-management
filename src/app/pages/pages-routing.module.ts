import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UOMComponent } from './uom/uom.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { RoleComponent } from './role/role.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,
  
  children: [
    { path:"profile", component : ProfileComponent },
    {path:"UOM",component:UOMComponent},
    { path:"manageuser", component : ManageUserComponent },
    { path:"add-user", component : AddUserComponent },
    {path:"role",component:RoleComponent},
    {path:"add-vendor",component:AddVendorComponent}
  ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
