import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RolService } from 'src/app/dashboard/servicios/rol.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { idRol } from 'src/app/dashboard/interfaces/rol.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-rol-crear',
  templateUrl: './rol-crear.component.html',
  styleUrls: ['./rol-crear.component.css']
})
export class RolCrearComponent {

  nombre: string = "Crear rol";
  formRol: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private _servicerRol: RolService) {

  }


  buildForm() {

  }
}



