import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCadeteComponent } from './list-cadete.component';

describe('ListCadeteComponent', () => {
  let component: ListCadeteComponent;
  let fixture: ComponentFixture<ListCadeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCadeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCadeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
