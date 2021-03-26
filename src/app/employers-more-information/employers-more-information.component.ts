import { Component, Input, OnInit } from '@angular/core';
import { EmployedInfoService } from '../employed-info.service';
import { Employees } from '../employers-list/employeeds';

@Component({
  selector: 'app-employers-more-information',
  templateUrl: './employers-more-information.component.html',
  styleUrls: ['./employers-more-information.component.scss']
})
export class EmployersMoreInformationComponent implements OnInit {
  
  constructor(private MoreInfo: EmployedInfoService) {
    MoreInfo.Employeed.subscribe(e => this.Employeed = e);
  }

  ngOnInit(): void {
  }

  Employeed : Employees[];

  closeExpand(){
    document.querySelector('#cardExpand').innerHTML = ``;
  };


}



