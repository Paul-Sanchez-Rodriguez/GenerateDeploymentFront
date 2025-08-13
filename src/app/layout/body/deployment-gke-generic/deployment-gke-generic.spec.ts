import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentGkeGeneric } from './deployment-gke-generic';

describe('DeploymentGkeGeneric', () => {
  let component: DeploymentGkeGeneric;
  let fixture: ComponentFixture<DeploymentGkeGeneric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentGkeGeneric]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentGkeGeneric);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
