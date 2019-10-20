import { TestBed } from '@angular/core/testing';

import { FlightSearchServiceService } from './flight-search-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FlightSearchServiceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: FlightSearchServiceService = TestBed.get(
      FlightSearchServiceService
    );
    expect(service).toBeTruthy();
  });
});
