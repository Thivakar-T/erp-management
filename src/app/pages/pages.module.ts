import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PagesModule { }
