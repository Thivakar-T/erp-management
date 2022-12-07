import { Component,OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';

interface Stand {
  value: string;
  viewValue: string;
}
interface Sec {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit {
  studentForm!: FormGroup;
  public Submitted = false;
  obj: any = {};
  
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
  ){}
    ngOnInit(): void {
      this.studentForm = this.fb.group({
        class: ['', Validators.required],
        section: ['', Validators.required],
  
      })  
    }
    
  
    get f(): { [key: string]: AbstractControl } {
      return this.studentForm.controls;
    }
    onSubmit() {
      
      this.Submitted = true;
    }
    
  }
 

