import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dialog-dialog-animations-example-dialog',
  templateUrl: './dialog-dialog-animations-example-dialog.component.html',
  styleUrls: ['./dialog-dialog-animations-example-dialog.component.scss']
})
export class DialogDialogAnimationsExampleDialogComponent {
  constructor(public dialogRef: MatDialogRef<CardComponent>) {}

}
