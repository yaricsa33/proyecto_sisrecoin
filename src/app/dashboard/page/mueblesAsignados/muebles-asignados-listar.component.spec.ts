import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesAsignadosListarComponent } from './muebles-asignados-listar.component';

describe('MueblesAsignadosListarComponent', () => {
  let component: MueblesAsignadosListarComponent;
  let fixture: ComponentFixture<MueblesAsignadosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MueblesAsignadosListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesAsignadosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
