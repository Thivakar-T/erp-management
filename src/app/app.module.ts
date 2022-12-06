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
import { DialogDialogAnimationsExampleDialogComponent } from './dialog-dialog-animations-example-dialog/dialog-dialog-animations-example-dialog.component';
import { AccountModule } from './account/account.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/layout/layout.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DialogDialogAnimationsExampleDialogComponent,
    TableComponent,
    InvoiceComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PagesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MaterialsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    AccountModule,
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
