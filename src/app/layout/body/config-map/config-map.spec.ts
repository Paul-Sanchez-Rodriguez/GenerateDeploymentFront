import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMap } from './config-map';

describe('ConfigMap', () => {
  let component: ConfigMap;
  let fixture: ComponentFixture<ConfigMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
