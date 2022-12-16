import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DialogDialogAnimationsExampleDialogComponent } from './dialog-dialog-animations-example-dialog/dialog-dialog-animations-example-dialog.component';
import { LoginComponent } from '../app/account/auth/login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path:"",component:CardComponent},
  {path:"card",component:CardComponent},
  {path:"DialogDialogAnimationsExampleDialog",component: DialogDialogAnimationsExampleDialogComponent},
  {path:"login",component: LoginComponent},
  {path:"invoice",component:InvoiceComponent },
  {path:"table",component:TableComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
