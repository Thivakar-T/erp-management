import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UOMComponent } from './uom/uom.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgSelectModule } from '@ng-select/ng-select';
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
    UOMComponent,
    ManageUserComponent,
    RoleComponent,
    AddVendorComponent,
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    LayoutModule,
    MaterialsModule,
    MaterialsRoutingModule,
  ]


})
export class PagesModule { }
