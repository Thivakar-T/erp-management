import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialsModule } from 'src/materials/materials.module';
import { MaterialsRoutingModule } from 'src/materials/materials-routing.module';
import { NgSelectModule,NgOption } from '@ng-select/ng-select';

@NgModule({
 
  declarations: [
    AddUserComponent,
    DashboardComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MaterialsModule,
    MaterialsRoutingModule,
    NgSelectModule,
    
  ]
})
export class PagesModule { }
