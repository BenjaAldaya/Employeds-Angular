import { Component, OnInit } from '@angular/core';
import { EmployedInfoService } from '../employed-info.service';
import { Employees } from './employeeds'

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.scss']
})
export class EmployersListComponent implements OnInit {
  
  constructor(private MoreInfo: EmployedInfoService) {}

  ngOnInit(): void {
  }

    employees : Employees[] = [
    {
      name: 'Nicolas Sanchez',
      age: 28,
      dni: 37985543,
      seguro: 20279855438,
      direccion: 'Estomba 1224',
      phone: 2983542319,
      mail: 'nico.sanchez@gmail.com',
      departamento: 'Administracion',
      cargo: 'Secretario',
      salary: 2000,
      comienzo: '17-05-2016',
      formacion: 'Secundaria completa e inicios de programacion',
      curses: 'Prog orientada a objetos',
      observacion: 'Chico travieso que le gusta trabajar, hay que ayudarlo pero ya va a aprender bien solo',
      emergencyName:'Sergio Sanchez', 
      emergencyPhone: 2983283423,
    },
    {
      name: 'Luis Martinez',
      age: 24,
      dni: 39291900,
      seguro: 20292919008,
      direccion: 'Sadi carnot 198',
      phone: 2983198423,
      mail: 'tomas.aldaya@gmail.com',
      departamento: 'Tecnologia',
      cargo: 'Trabajador',
      salary: 1925,
      comienzo: '20-03-2018',
      formacion: 'Secundario completo',
      curses: 'Electricista, carpintero y plomero',
      observacion: '',
      emergencyName:'Sabrina Vieira', 
      emergencyPhone: 2983983566,
    },
    {
      name: 'Pedro Lopez',
      age: 21,
      dni: 39325143,
      seguro: 20393251438,
      direccion: 'Avelardi 284',
      phone: 2983383212,
      mail: 'fer.aldaya@gmail.com',
      departamento: 'Agricultura',
      cargo: 'Trabajador',
      salary: 2225,
      comienzo: '22-03-2021',
      formacion: 'Secundaria completa',
      curses: '',
      observacion: 'lorem lorem lorem lorem lorem lorem lorem lorem',
      emergencyName:'Martin Lopez', 
      emergencyPhone: 2983985432,
    },

    ];

    expandEmployeed(employeed: Employees){
      this.MoreInfo.expandEmployeed(employeed);
    }
}
