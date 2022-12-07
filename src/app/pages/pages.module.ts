import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AddUserComponent,
    DashboardComponent,
    ProfileComponent,
    ManageUserComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    NgSelectModule
  ]
})
export class PagesModule { }
