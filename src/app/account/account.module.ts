import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MaterialsModule } from 'src/materials/materials.module';
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AuthModule,
    AuthRoutingModule,
    MaterialsModule
  ]
})
export class AccountModule { }
