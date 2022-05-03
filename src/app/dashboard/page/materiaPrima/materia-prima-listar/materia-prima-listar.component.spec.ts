import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPrimaListarComponent } from './materia-prima-listar.component';

describe('MateriaPrimaListarComponent', () => {
  let component: MateriaPrimaListarComponent;
  let fixture: ComponentFixture<MateriaPrimaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaPrimaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaPrimaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
