import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  nombre: string = "Crear usuarios";

  constructor() { }

  ngOnInit(): void {
  }

}
