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
});
