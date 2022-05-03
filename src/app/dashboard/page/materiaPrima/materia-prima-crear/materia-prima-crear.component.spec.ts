import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPrimaCrearComponent } from './materia-prima-crear.component';

describe('MateriaPrimaCrearComponent', () => {
  let component: MateriaPrimaCrearComponent;
  let fixture: ComponentFixture<MateriaPrimaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaPrimaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaPrimaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
