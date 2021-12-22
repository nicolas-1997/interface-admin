import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaHistoryComponent } from './columna-history.component';

describe('ColumnaHistoryComponent', () => {
  let component: ColumnaHistoryComponent;
  let fixture: ComponentFixture<ColumnaHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnaHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
