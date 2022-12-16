import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { MaterialsModule } from 'src/materials/materials.module';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AccountModule } from './account/account.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import{PagesModule}from './pages/pages.module'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PagesModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MaterialsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    AccountModule,
    AccountRoutingModule ,
    PagesRoutingModule ,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
