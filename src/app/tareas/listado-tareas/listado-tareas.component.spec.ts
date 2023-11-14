import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ListadoTareasComponent } from './listado-tareas.component';

describe('ListadoTareasComponent', () => {
  let component: ListadoTareasComponent;
  let fixture: ComponentFixture<ListadoTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoTareasComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListadoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
