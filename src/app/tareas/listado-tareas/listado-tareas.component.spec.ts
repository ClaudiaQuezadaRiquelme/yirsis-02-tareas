import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ListadoTareasComponent } from './listado-tareas.component';
import { TareasService } from '../services/tareas.service';

describe('ListadoTareasComponent', () => {
  let component: ListadoTareasComponent;
  let fixture: ComponentFixture<ListadoTareasComponent>;
  let service: TareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoTareasComponent],
      providers: [TareasService],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListadoTareasComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TareasService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tareaDelete: Debería eliminar la primera tarea.', ()=> {
    component.tareaDelete(0);
    expect(service.tareas.length).toBe(3);
  });

  it('tareaCompletar: Debería completar la primera tarea.', ()=> {
    component.tareaCompletar(0);
    expect(service.tareas[0].completada).toBe(true);
  });

  it('get tareas: Debería traer todas las tareas del servicio.', ()=> {
    component.tareas;
    expect(component.tareas).toBeTruthy();
    expect(component.tareas.length).toBe(4);
  });

  it('Debería renderizar un HTMLElement clase table', ()=> {
    const render: HTMLElement = fixture.nativeElement;
    const table = render.querySelector('.table');
    console.log('table html: ',table);
    expect(table).toBeTruthy();
  });

  it('Debería renderizar una tabla con las columnas ID, Actividad, Completar y Eliminar', ()=> {
    const render: HTMLElement = fixture.nativeElement;
    const table = render.querySelector('.table')?.innerHTML;
    console.log('table html: ',table);
    expect(table).toContain('>ID</th>');
    expect(table).toContain('>Actividad</th>');
    expect(table).toContain('>Completar</th>');
    expect(table).toContain('>Eliminar</th>');
  });

  it('Debería renderizar los botones Completar y Eliminar dentro de la tabla', ()=> {
    const render: HTMLElement = fixture.nativeElement;
    const btnCompletar = render.querySelector('.button.is-link');
    const btnEliminar = render.querySelector('.button.is-danger');
    console.log('btnCompletar html: ',btnCompletar);
    console.log('btnEliminar html: ',btnEliminar);
    expect(btnCompletar).toBeTruthy();
    expect(btnEliminar).toBeTruthy();
  });
});
