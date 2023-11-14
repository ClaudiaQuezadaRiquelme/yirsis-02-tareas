import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SubtituloComponent } from './subtitulo.component';
import { TareasService } from '../services/tareas.service';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;
  let service: TareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtituloComponent], // instancia de ngModule,
      providers: [TareasService],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TareasService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería renderizar mi prueba 4 elementos.', ()=> {
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#totalTareas')?.textContent?.trim();
    expect(tareas).toEqual('Tareas en total: 4');
  });

  it('Debería disminuir en 1 si elimino un elemento.', ()=> {
    service.delete(1);
    fixture.detectChanges();
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#totalTareas')?.textContent?.trim();
    expect(tareas).toEqual('Tareas en total: 3');
  });
});
