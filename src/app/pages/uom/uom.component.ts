import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.scss']
})
export class UOMComponent implements OnInit {
  uomForm!: FormGroup;
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
    this.uomForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Status: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.uomForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
  }


}





