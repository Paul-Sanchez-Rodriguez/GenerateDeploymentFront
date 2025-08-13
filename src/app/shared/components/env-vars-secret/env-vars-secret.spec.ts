import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVarsSecret } from './env-vars-secret';

describe('EnvVarsSecret', () => {
  let component: EnvVarsSecret;
  let fixture: ComponentFixture<EnvVarsSecret>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvVarsSecret]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvVarsSecret);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
