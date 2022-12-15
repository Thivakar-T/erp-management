import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss']
})
export class DialogueBoxComponent {

  constructor(public dialogRef: MatDialogRef< AddUserComponent >){}
    
}
