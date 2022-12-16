import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  { position: 1, name: 'Raj', email: 'rajppn4@gmail.com', phone: 1234567890, status: 'Active', role: 'user' },
  { position: 2, name: 'Sriram', email: 'sriram@gmail.com', phone: 7265376782, status: 'Inactive', role: 'user' },
  { position: 3, name: 'Sanjay', email: 'sanjay@gmail.com', phone: 9987237084, status: 'Active', role: 'user' },
  { position: 4, name: 'Gangai', email: 'ganagi@gmail.com', phone: 8464636847, status: 'Inactive', role: 'user' },
  { position: 5, name: 'Thivakar', email: 'thiva@gmail.com', phone: 6647645364, status: 'Inactive', role: 'user' },
  { position: 6, name: 'Visu', email: 'visu@gmail.com', phone: 9345833665, status: 'Inactive', role: 'user' },
  { position: 7, name: 'Gangai', email: 'ganagi@gmail.com', phone: 8464636847, status: 'Active', role: 'user' },
  { position: 8, name: 'Thivakar', email: 'thiva@gmail.com', phone: 6647645364, status: 'Active', role: 'user' },
  { position: 9, name: 'Visu', email: 'visu@gmail.com', phone: 9345833665, status: 'Active', role: 'user' },

];

export class ButtonOverviewExample { }


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  userform!: FormGroup;
  public submitted = false;
  array: any
  loopstatus: any
  loopname: any;
  obj: any = {}
  result: any = [{}]
  status = [
    { id: 1, status: 'Active' },
    { id: 1, status: 'Inactive' }
  ]
  displayedColumns: string[] = ['position', 'name', 'email', 'phone', 'status', 'role', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userform = this.fb.group({
      status: [''],
      name: [''],
    });
    this.obj.name = ""
    this.obj.status = ""
    this.array = this.dataSource.filteredData;
    console.log(this.array);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: any) {
    const dataArray = this.array.filter((res: any) => {
      console.log(res)
      return res.name === event
    })
    this.dataSource = new MatTableDataSource<any>(dataArray);
    console.log(this.dataSource)
    this.obj.name = '';
    this.obj.status = '';
  }

  applyFilterstatus(event: any) {
    console.log(event);
    const dataArray = this.array.filter((res: any) => {
      return res.status === event
    })
    this.dataSource = new MatTableDataSource<any>(dataArray);
    this.obj.name = '';
    this.obj.status = '';
  }
  totalFilter(data: any, event: any) {
    console.log(data, event);
    const dataArray = this.array.filter((res: any) => {
      console.log(res)
      return res.status === data && res.name === event
    })
    this.dataSource = new MatTableDataSource<any>(dataArray);
    this.obj.name = '';
    this.obj.status = '';
  }


  search() {
    console.log(this.userform.value)
    console.log(this.userform.value.status);

    if (this.userform.value.status != '' && this.userform.value.name == '') {
      this.applyFilterstatus(this.userform.value.status);
    } else if (this.userform.value.name != '' && this.userform.value.status == '') {
      this.applyFilter(this.userform.value.name);
    } else if (this.userform.value.name != ''
      && this.userform.value.status != '') {
      this.totalFilter(this.userform.value.status, this.userform.value.name);
    } else {
      this.dataSource
    }
  }

}
