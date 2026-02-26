import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalss } from './signalss';

describe('Signalss', () => {
  let component: Signalss;
  let fixture: ComponentFixture<Signalss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
