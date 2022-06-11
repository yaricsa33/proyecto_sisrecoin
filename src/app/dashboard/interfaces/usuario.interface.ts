import { Genero } from "../types/types";



export interface IUsuario {
  idUsuario: number;
  nombres: string;
  apellidos: string;
  cedula: number;
  lugarNacimiento: string;
  genero: Genero;
  fechaIngreso: Date;
  correo: string;
  contrasena: string;
  celular: number;
  idRol: number

}