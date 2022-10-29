import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigesFormComponent } from './litiges-form.component';

describe('LitigesFormComponent', () => {
  let component: LitigesFormComponent;
  let fixture: ComponentFixture<LitigesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitigesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
