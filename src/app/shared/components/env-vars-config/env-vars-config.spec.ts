import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVarsConfig } from './env-vars-config';

describe('EnvVarsConfig', () => {
  let component: EnvVarsConfig;
  let fixture: ComponentFixture<EnvVarsConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvVarsConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvVarsConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
