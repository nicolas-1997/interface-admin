import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesActivosComponent } from './viajes-activos.component';

describe('ViajesActivosComponent', () => {
  let component: ViajesActivosComponent;
  let fixture: ComponentFixture<ViajesActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
