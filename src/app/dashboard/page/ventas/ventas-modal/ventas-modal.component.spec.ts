import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasModalComponent } from './ventas-modal.component';

describe('VentasModalComponent', () => {
  let component: VentasModalComponent;
  let fixture: ComponentFixture<VentasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
