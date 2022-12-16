import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    
  }

}






