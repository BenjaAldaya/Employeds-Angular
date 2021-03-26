import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employees } from './employers-list/employeeds';

@Injectable({
  providedIn: 'root'
})
export class EmployedInfoService {

  constructor() { }

  private _Employeed: Employees[] = [];
  Employeed: BehaviorSubject<Employees[]> = new BehaviorSubject(this._Employeed);

  public expandEmployeed(employeed: Employees) {
    if(employeed){
      this._Employeed = [];
      this._Employeed.push(employeed);
    }
    
    this.Employeed.next(this._Employeed);
  }
}
