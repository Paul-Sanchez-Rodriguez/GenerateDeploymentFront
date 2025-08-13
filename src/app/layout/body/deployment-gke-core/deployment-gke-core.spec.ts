import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentGkeCore } from './deployment-gke-core';

describe('DeploymentGkeCore', () => {
  let component: DeploymentGkeCore;
  let fixture: ComponentFixture<DeploymentGkeCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentGkeCore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentGkeCore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
