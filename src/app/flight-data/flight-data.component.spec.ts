import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDataComponent } from './flight-data.component';

describe('FlightDataComponent', () => {
  let component: FlightDataComponent;
  let fixture: ComponentFixture<FlightDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
