import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { MaterialsModule } from 'src/materials/materials.module';
import { MaterialsRoutingModule } from 'src/materials/materials-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/layout/layout.module';

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
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MaterialsModule,
    MaterialsRoutingModule,
  ]
  
  
})
export class PagesModule { }
