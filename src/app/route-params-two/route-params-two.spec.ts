import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamsTwo } from './route-params-two';

describe('RouteParamsTwo', () => {
  let component: RouteParamsTwo;
  let fixture: ComponentFixture<RouteParamsTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteParamsTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteParamsTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
