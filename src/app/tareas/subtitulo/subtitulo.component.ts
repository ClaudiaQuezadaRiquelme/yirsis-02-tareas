import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent {

  constructor(
    private tareasService: TareasService,
  ) {}

  get tareasLength() {
    return this.tareasService.tareas.length;
  }
  get completadas() {
    return this.tareasService.getCompletadas();
  }
  get pendientes() {
    return this.tareasService.getPendientes();
  }
}
