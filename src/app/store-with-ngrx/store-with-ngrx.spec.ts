import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreWithNgrx } from './store-with-ngrx';

describe('StoreWithNgrx', () => {
  let component: StoreWithNgrx;
  let fixture: ComponentFixture<StoreWithNgrx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreWithNgrx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreWithNgrx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
