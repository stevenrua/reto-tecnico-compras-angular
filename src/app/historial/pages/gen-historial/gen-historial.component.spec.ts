import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenHistorialComponent } from './gen-historial.component';

describe('GenHistorialComponent', () => {
  let component: GenHistorialComponent;
  let fixture: ComponentFixture<GenHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenHistorialComponent]
    });
    fixture = TestBed.createComponent(GenHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
