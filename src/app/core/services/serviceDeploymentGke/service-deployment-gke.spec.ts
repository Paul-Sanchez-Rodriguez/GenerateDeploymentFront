import { TestBed } from '@angular/core/testing';

import { ServiceDeploymentGke } from './service-deployment-gke';

describe('ServiceDeploymentGke', () => {
  let service: ServiceDeploymentGke;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDeploymentGke);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
