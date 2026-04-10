import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildHome } from './build-home';

describe('BuildHome', () => {
  let component: BuildHome;
  let fixture: ComponentFixture<BuildHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
