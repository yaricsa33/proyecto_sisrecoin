import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuebleListarComponent } from './mueble-listar.component';

describe('MuebleListarComponent', () => {
  let component: MuebleListarComponent;
  let fixture: ComponentFixture<MuebleListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuebleListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuebleListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
