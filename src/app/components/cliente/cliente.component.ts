import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  txt='ingrese sus datos requeridos';
  Modificartext():void
  {
    this.txt='no se admite campo en blanco';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
