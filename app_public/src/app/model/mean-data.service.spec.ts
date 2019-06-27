import { TestBed } from '@angular/core/testing';

import { MeanDataService } from './mean-data.service';

describe('MeanDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeanDataService = TestBed.get(MeanDataService);
    expect(service).toBeTruthy();
  });
});
