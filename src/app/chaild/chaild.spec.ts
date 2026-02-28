import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaild } from './chaild';

describe('Chaild', () => {
  let component: Chaild;
  let fixture: ComponentFixture<Chaild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chaild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chaild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
