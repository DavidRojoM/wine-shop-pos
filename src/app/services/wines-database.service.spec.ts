import { TestBed } from '@angular/core/testing';

import { WinesDatabaseService } from './wines-database.service';

describe('WinesDatabaseService', () => {
  let service: WinesDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinesDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
