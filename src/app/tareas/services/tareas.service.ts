import { Injectable } from "@angular/core";

@Injectable()
export class TareasService {
    tareas: Array<string> = [
        'Barrer', 'Trapear', 'Cocinar', 'Leer'
    ];

    delete(value: string): void {
        for (let i = 0; i < this.tareas.length; i++) {
            const elem = this.tareas[i];
            if (elem.localeCompare(value) === 0) {
                this.tareas.splice(i, 1);
            }
        }
    }
}