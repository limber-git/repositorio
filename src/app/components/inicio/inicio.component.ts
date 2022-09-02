import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  titulo='TARIJATEC';
  bienvenida='BIENVENIDOS AL SITIO DE TARIJATEC, LIDERES EN IMPORTACION Y EXPORTACION DE TEGNOLOGIA VARIADA';

  constructor() { }

  ngOnInit(): void {
  }

}
