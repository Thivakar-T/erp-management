import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ProfileComponent } from './../profile/profile.component';
@Component({
  selector: 'app-dialoguebox',
  templateUrl: './dialoguebox.component.html',
  styleUrls: ['./dialoguebox.component.scss']
})
export class DialogueboxComponent {
  constructor(public dialogRef: MatDialogRef<ProfileComponent>) {
    
  }
}
