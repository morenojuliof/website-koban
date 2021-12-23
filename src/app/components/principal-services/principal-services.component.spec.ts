import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalServicesComponent } from './principal-services.component';

describe('PrincipalServicesComponent', () => {
  let component: PrincipalServicesComponent;
  let fixture: ComponentFixture<PrincipalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
