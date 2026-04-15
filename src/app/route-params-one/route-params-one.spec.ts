import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamsOne } from './route-params-one';

describe('RouteParamsOne', () => {
  let component: RouteParamsOne;
  let fixture: ComponentFixture<RouteParamsOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteParamsOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteParamsOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
