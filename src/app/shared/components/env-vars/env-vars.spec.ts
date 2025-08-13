import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVars } from './env-vars';

describe('EnvVars', () => {
  let component: EnvVars;
  let fixture: ComponentFixture<EnvVars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvVars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvVars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
