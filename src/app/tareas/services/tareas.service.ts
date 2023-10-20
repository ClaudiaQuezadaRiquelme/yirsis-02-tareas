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

    getCompletadas(): number {
        let completadas: number = 0;
        for (let i = 0; i < this.tareas.length; i++) {
            const elem = this.tareas[i];
            if (elem.completada) completadas++;
        }
        return completadas;
    }

    getPendientes(): number {
        let pendientes: number = 0;
        for (let i = 0; i < this.tareas.length; i++) {
            const elem = this.tareas[i];
            if (!elem.completada) pendientes++;
        }
        return pendientes;
    }
}