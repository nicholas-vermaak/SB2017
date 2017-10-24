import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelLogListComponent } from './fuel-log-list.component';

describe('FuelLogListComponent', () => {
  let component: FuelLogListComponent;
  let fixture: ComponentFixture<FuelLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
