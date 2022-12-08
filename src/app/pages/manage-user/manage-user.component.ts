import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  phone: number;
  status: string;
  role: string;

}

const ELEMENT_DATA: any = [
  { position: 1, name: 'Raj', email: 'rajppn4@gmail.com', phone: 1234567890, status: 'active', role: 'user' },
  { position: 2, name: 'Sriram', email: 'sriram@gmail.com', phone: 7265376782, status: 'Inactive', role: 'user' },
  { position: 3, name: 'Sanjay', email: 'sanjay@gmail.com', phone: 9987237084, status: 'active', role: 'user' },
  { position: 4, name: 'Gangai', email: 'ganagi@gmail.com', phone: 8464636847, status: 'Inactive', role: 'user' },
  { position: 5, name: 'Thivakar', email: 'thiva@gmail.com', phone: 6647645364, status: 'active', role: 'user' },
  { position: 6, name: 'Visu', email: 'visu@gmail.com', phone: 9345833665, status: 'Inactive', role: 'user' },

];

export class ButtonOverviewExample { }


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  formpage!: FormGroup;
  public submitted = false;
  cities: any
  cars: any
  selectedCar!: number;
  datas: any
  array:any
  
  sourceLanguages = []
  car = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  displayedColumns: string[] = ['position', 'name', 'email', 'phone', 'status', 'role', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formpage = this.fb.group({
      status: [''],
      name: [''],

    });

    this.cities = [
      { id: 1, name: 'Vilnius' },
      { id: 2, name: 'Kaunas' },
      { id: 3, name: 'Pavilnys' },
      { id: 4, name: 'Pabradė' },
      { id: 5, name: 'Klaipėda' }
    ];
     this.array = this.dataSource.filteredData;
    console.log(this.array);
    // this.sourceLanguages=array
    console.log(this.dataSource.filteredData);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  search(){
    
  }
}
