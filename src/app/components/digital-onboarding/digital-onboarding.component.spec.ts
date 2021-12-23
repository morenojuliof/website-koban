import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOnboardingComponent } from './digital-onboarding.component';

describe('DigitalOnboardingComponent', () => {
  let component: DigitalOnboardingComponent;
  let fixture: ComponentFixture<DigitalOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
