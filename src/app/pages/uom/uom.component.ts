import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

interface cate {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.scss']
})
export class UOMComponent implements OnInit{
  
  
  formpage!: FormGroup;
  public Submitted = false;
  ReadMore: boolean = true
  visible: boolean = false

  classes: any
  sections: any
  months: any
  years: any
  status:any


  constructor(private fb: FormBuilder, private route: Router,
    private router: ActivatedRoute) {
      this.status=[
        "Active","InActive"
       ]
  }

  ngOnInit(): void {
    this.formpage = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Status: ['', Validators.required],
     
    });

  


  }
  get f(): { [key: string]: AbstractControl } {
    return this.formpage.controls;
  }

  onsubmit() {
   this.Submitted = true;
      console.log(this.formpage.value);

      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    
  }


}





 

