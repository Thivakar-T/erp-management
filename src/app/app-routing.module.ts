import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/account/auth/login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SildebarComponent } from 'src/layout/sildebar/sildebar.component';

const routes: Routes = [
  {path:"",component: LoginComponent},
  {path:"login",component: LoginComponent},
  {path:"invoice",component:InvoiceComponent },
  {path:"side",component:SildebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
