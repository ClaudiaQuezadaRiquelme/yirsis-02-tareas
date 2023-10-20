import { Injectable } from "@angular/core";

@Injectable()
export class TareasService {
    tareas: Array<string> = [
        'Barrer', 'Trapear', 'Cocinar', 'Leer'
    ];

    delete(index: number): void {
        this.tareas.splice(index, 1);
    }
}