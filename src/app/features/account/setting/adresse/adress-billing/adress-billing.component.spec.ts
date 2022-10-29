import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBillingComponent } from './adress-billing.component';

describe('AdressBillingComponent', () => {
  let component: AdressBillingComponent;
  let fixture: ComponentFixture<AdressBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdressBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
