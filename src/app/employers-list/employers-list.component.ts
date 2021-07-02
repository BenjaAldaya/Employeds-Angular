import { Component, OnInit } from '@angular/core';
import { EmployedInfoService } from '../employed-info.service';
import { EmployeesDataService } from '../employees-data.service';
import { Employees } from './employeeds';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.scss']
})
export class EmployersListComponent implements OnInit {
  
  constructor(private MoreInfo: EmployedInfoService,
              private EmployeesData: EmployeesDataService) {}

  ngOnInit(): void {
    
    this.EmployeesData.getAll()
    .subscribe(employees => this.employees = employees);
  }

    employees : Employees[] = [];

    expandEmployeed(employeed: Employees){
      this.MoreInfo.expandEmployeed(employeed);
    }
}
