import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  tareas: string[] = [];

  constructor(
    private tareasService: TareasService,
  ) {
    this.tareas = tareasService.tareas;
  }
}
