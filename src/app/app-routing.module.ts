import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DialogDialogAnimationsExampleDialogComponent } from './dialog-dialog-animations-example-dialog/dialog-dialog-animations-example-dialog.component';



const routes: Routes = [
  {path:"",component:CardComponent},
  {path:"card",component:CardComponent},
  {path:"DialogDialogAnimationsExampleDialog",component: DialogDialogAnimationsExampleDialogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
