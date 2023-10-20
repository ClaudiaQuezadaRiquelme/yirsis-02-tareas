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

  get tareasLength(): number {
    return this.tareasService.tareas.length;
  }
  get completadas(): number {
    return this.tareasService.getCompletadas();
  }
  get pendientes(): number {
    return this.tareasService.getPendientes();
  }
}
