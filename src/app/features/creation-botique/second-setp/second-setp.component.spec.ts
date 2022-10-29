import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSetpComponent } from './second-setp.component';

describe('SecondSetpComponent', () => {
  let component: SecondSetpComponent;
  let fixture: ComponentFixture<SecondSetpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSetpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSetpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
