import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators,AbstractControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

export class RoleComponent {
  roleform!: FormGroup;
 Submitted = false;
  obj: any = {};

  Status = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Inactive' },

  ];
  constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.roleform = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Status: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.roleform.controls;
  }
  onSubmit() {
    this.Submitted = true;
  }
}
