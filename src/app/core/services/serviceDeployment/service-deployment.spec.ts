import { TestBed } from '@angular/core/testing';

import { ServiceDeployment } from './service-deployment';

describe('ServiceDeployment', () => {
  let service: ServiceDeployment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDeployment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
