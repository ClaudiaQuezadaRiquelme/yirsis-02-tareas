import { Injectable } from "@angular/core";
import { Tarea } from "../interfaces/tarea.interface";

@Injectable()
export class TareasService {
    tareas: Array<Tarea> = [
        {
            tarea: 'Barrer',
            completada: false
        },
        {
            tarea: 'Trapear',
            completada: false
        },
        {
            tarea: 'Cocinar',
            completada: false
        },
        {
            tarea: 'Leer',
            completada: false
        },
    ];

    delete(index: number): void {
        this.tareas.splice(index, 1);
    }

    completar(index: number): void {
        this.tareas[index].completada = true;
    }
}