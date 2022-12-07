import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { MaterialsModule } from 'src/materials/materials.module';
@NgModule({
  declarations: [
    AddUserComponent,
    DashboardComponent,
    ProfileComponent,
    RoleComponent,
    AddVendorComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialsModule
  ]
})
export class PagesModule { }
