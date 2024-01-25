import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoFacComponent } from './ingreso-fac.component';

describe('IngresoFacComponent', () => {
  let component: IngresoFacComponent;
  let fixture: ComponentFixture<IngresoFacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoFacComponent]
    });
    fixture = TestBed.createComponent(IngresoFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
