import { TestBed } from '@angular/core/testing';

import { GlobalservicesService } from './globalservices.service';

describe('GlobalservicesService', () => {
  let service: GlobalservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
