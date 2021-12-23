import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashinCardComponent } from './cashin-card.component';

describe('CashinCardComponent', () => {
  let component: CashinCardComponent;
  let fixture: ComponentFixture<CashinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashinCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
