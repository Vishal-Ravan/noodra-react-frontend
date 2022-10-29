import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBotiqueComponent } from './creation-botique.component';

describe('CreationBotiqueComponent', () => {
  let component: CreationBotiqueComponent;
  let fixture: ComponentFixture<CreationBotiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationBotiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationBotiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
