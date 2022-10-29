import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSetpComponent } from './first-setp.component';

describe('FirstSetpComponent', () => {
  let component: FirstSetpComponent;
  let fixture: ComponentFixture<FirstSetpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSetpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSetpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
