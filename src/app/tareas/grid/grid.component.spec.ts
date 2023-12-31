import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería renderizar un HTMLElement clase columns', ()=> {
    const render: HTMLElement = fixture.nativeElement;
    const columns = render.querySelector('.columns');
    console.log('columns html: ',columns);
    expect(columns).toBeTruthy();
  });
});
