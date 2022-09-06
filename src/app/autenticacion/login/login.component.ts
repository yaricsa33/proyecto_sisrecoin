import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAutenticacion } from 'src/app/dashboard/interfaces/autenticacion.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { AutenticacionService } from 'src/app/dashboard/servicios/autenticacion.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formAutenticacion: FormGroup = new FormGroup({});
  validaciones = false;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceMensajes: MensajesService,
    private _serviceAutenticacion: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formAutenticacion = this.formBuilder.group({
      cedula: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.validaciones = true;

    if (this.formAutenticacion.invalid) {
      return;
    }

    this._serviceAutenticacion
      .postAutenticacion(this.formAutenticacion.value)
      .subscribe((data: IResponse) => {
        if (data.error == 200) {
          sessionStorage.setItem('user', JSON.stringify(data));
          this._serviceMensajes.successMessage('Bienvenido...', data.mensaje);
          this.router.navigate(['/dashboard']);
        } else {
          this._serviceMensajes.errorMessage('Error', data.mensaje, '');
        }
      });
  }
}
