import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHistoryComponent } from './tabla-history.component';

describe('TablaHistoryComponent', () => {
  let component: TablaHistoryComponent;
  let fixture: ComponentFixture<TablaHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
