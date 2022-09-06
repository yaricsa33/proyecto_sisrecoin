import { IMueble } from '../mueble.interface';

export interface IMuebleAsignadosResponse extends IMueble {
  finalizado: number;
}
