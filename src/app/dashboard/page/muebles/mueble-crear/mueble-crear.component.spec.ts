import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuebleCrearComponent } from './mueble-crear.component';

describe('MuebleCrearComponent', () => {
  let component: MuebleCrearComponent;
  let fixture: ComponentFixture<MuebleCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuebleCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuebleCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
