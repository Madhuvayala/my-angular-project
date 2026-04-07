import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithSignals } from './form-with-signals';

describe('FormWithSignals', () => {
  let component: FormWithSignals;
  let fixture: ComponentFixture<FormWithSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWithSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
