import { TestBed } from '@angular/core/testing';

import { HtfServiceService } from './htf-service.service';

describe('HtfServiceService', () => {
  let service: HtfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
