import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../interfaces/usuario.interface';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: IUsuario;

  constructor(private _serviceAutenticacion: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
    this.user = this._serviceAutenticacion.getUsuario();
    console.log(this.user);
  }

  logout() {
    this._serviceAutenticacion.logout();
    this.router.navigate(['autenticacion/login'])
  }

}
