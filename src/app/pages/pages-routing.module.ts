import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UOMComponent } from './uom/uom.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,
  
  children: [
    { path:"profile", component : ProfileComponent },
    {path:"UOM",component:UOMComponent}

  ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
