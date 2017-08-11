import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListFlightsComponent } from './display-list-flights.component';

describe('DisplayListFlightsComponent', () => {
  let component: DisplayListFlightsComponent;
  let fixture: ComponentFixture<DisplayListFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
