import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {

  constructor(
    private tareasService: TareasService,
  ) {}

  get tareas(): Tarea[] {
    return this.tareasService.tareas;
  }

  tareaDelete(index: number): void {
    return this.tareasService.delete(index);
  }
  tareaCompletar(index: number): void {
    return this.tareasService.completar(index);
  }
}
