import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {




  lista = [
    {
      "titulo":"Darle de comer",
      "descripcion":"Croquetas y liquidos"
    },
    {
      "titulo":"Asearlo",
      "descripcion":"Bañarle y Peinarl"
    },
    {
      "titulo":"llevarle de Paseo",
      "descripcion":"Sacarle al bosque"
    },
    {
      "titulo":"Ver una Peli",
      "descripcion":"las de terror nos encanta"
    },
    {
      "titulo":"Salir a correr",
      "descripcion":"llevar la correa y agua"
    },
    {
      "titulo":"Ir a la lavanderia",
      "descripcion":"Llevar la ropa azul"
    },
   ];

  constructor() { }

  ngOnInit(): void {

  }

}
