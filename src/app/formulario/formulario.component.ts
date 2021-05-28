import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

interpolationBinding = "Componente Formulario"
propertyBinding="blue";
  constructor() { }

  ngOnInit(): void {
  }

}
