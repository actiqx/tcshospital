import { HospitalService } from './../../_services/hospital.service';
import { DataService } from './../../_services/Data.service';
import { Component, OnInit } from '@angular/core';
import { Departments } from '../../model/Departments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DepartmentView',
  templateUrl: './DepartmentView.component.html',
  styleUrls: ['./DepartmentView.component.css']
})
export class DepartmentViewComponent implements OnInit {
  hospitalname: String;
  departments: Departments[];
  constructor(
    private dataservice: DataService,
    private hospitalService: HospitalService,
    private router: Router
  ) {
    this.hospitalname = this.dataservice.serviceData;
  }

  ngOnInit() {
    this.getDepartmentList();
  }
  goBack() {
    this.router.navigate(['/hospital']);
  }
  getDepartmentList() {
    this.departments = this.hospitalService.Departments.filter(
      s => s.hospitalname === this.hospitalname
    );
    console.log(this.departments);
  }
}
