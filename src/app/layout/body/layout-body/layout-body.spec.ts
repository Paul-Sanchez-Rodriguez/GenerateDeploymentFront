import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBody } from './layout-body';

describe('LayoutBody', () => {
  let component: LayoutBody;
  let fixture: ComponentFixture<LayoutBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
