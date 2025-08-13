import { TestBed } from '@angular/core/testing';

import { DeploymentsGkeService } from './deployments-gke-service';

describe('DeploymentsGkeService', () => {
  let service: DeploymentsGkeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeploymentsGkeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
