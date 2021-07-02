import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from './employers-list/employeeds';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

const URL = "https://60de5f78878c890017fa2e85.mockapi.io/employees";

@Injectable({
  providedIn: 'root'
})

export class EmployeesDataService {

  constructor(private http: HttpClient) { }
  

  public getAll(): Observable<Employees[]> {
    //conseguir la API
    return this.http.get<Employees[]>(URL);
  }
}
