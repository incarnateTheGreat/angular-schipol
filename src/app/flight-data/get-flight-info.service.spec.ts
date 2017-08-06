import { TestBed, inject } from '@angular/core/testing';

import { GetFlightInfoService } from './get-flight-info.service';

describe('GetFlightInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFlightInfoService]
    });
  });

  it('should be created', inject([GetFlightInfoService], (service: GetFlightInfoService) => {
    expect(service).toBeTruthy();
  }));
});
