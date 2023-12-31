import { TareasService } from "./tareas.service";

describe('TareasService', () => {
    let service: TareasService;

    beforeEach( ()=> {
        service = new TareasService();
    });

    it('ToBe: debería verificar que mi servicio inicie en 4 tareas.', ()=> {
        expect(service.tareas.length).toBe(4);
    });

    it('Delete: debería borrar la primera tarea (index 0).', ()=> {
        service.delete(0);
        expect(service.tareas.length).toBe(3);
    });

    it('Delete: NO debería borrar una tarea que no existe (index 10).', ()=> {
        service.delete(10);
        expect(service.tareas.length).toBe(4);
    });

    it('Spy: debería llamar a la función "completar" una sola vez.', ()=> {
        const spy = jasmine.createSpyObj('TareasService', ['getCompletadas']);  // permite probar una fc que venga de un objeto y permite trabajarlo como objeto de JS
        spy.getCompletadas();
        expect(spy.getCompletadas.calls.count()).toBe(1);
    });
});