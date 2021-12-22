import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCadeteComponent } from './register-cadete.component';

describe('RegisterCadeteComponent', () => {
  let component: RegisterCadeteComponent;
  let fixture: ComponentFixture<RegisterCadeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCadeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCadeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
