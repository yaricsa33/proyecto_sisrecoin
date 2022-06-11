import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia-prima-listar',
  templateUrl: './materia-prima-listar.component.html',
  styleUrls: ['./materia-prima-listar.component.css']
})
export class MateriaPrimaListarComponent implements OnInit {

  nombre: string = "Listar materia prima";

  ngOnInit(): void {

  }
}
