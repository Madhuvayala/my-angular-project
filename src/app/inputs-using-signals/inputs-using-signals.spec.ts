import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsUsingSignals } from './inputs-using-signals';

describe('InputsUsingSignals', () => {
  let component: InputsUsingSignals;
  let fixture: ComponentFixture<InputsUsingSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsUsingSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsUsingSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
