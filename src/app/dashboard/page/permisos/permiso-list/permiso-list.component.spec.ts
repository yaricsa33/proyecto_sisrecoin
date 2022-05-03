import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoListComponent } from './permiso-list.component';

describe('PermisoListComponent', () => {
  let component: PermisoListComponent;
  let fixture: ComponentFixture<PermisoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
