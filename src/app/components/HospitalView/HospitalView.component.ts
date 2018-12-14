import { DataService } from './../../_services/Data.service';

import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../_services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-HospitalView',
  templateUrl: './HospitalView.component.html',
  styleUrls: ['./HospitalView.component.css']
})
export class HospitalViewComponent implements OnInit {
  hospitals = [];
  constructor(
    private hospitalService: HospitalService,
    private dataservice: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHospitalList();
  }

  getHospitalList() {
    this.hospitals = this.hospitalService.Hospitals;
  }
  navigateTo(hsname) {
    console.log(hsname);
    this.dataservice.serviceData = hsname;
    this.router.navigate(['/department']);
  }
}
