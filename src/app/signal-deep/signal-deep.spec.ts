import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDeep } from './signal-deep';

describe('SignalDeep', () => {
  let component: SignalDeep;
  let fixture: ComponentFixture<SignalDeep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDeep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDeep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
