import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularStepperComponent } from './nebular-stepper.component';

describe('NebularStepperComponent', () => {
  let component: NebularStepperComponent;
  let fixture: ComponentFixture<NebularStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebularStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
