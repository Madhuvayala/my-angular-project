import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWithTemplate } from './signals-with-template';

describe('SignalsWithTemplate', () => {
  let component: SignalsWithTemplate;
  let fixture: ComponentFixture<SignalsWithTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsWithTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsWithTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
