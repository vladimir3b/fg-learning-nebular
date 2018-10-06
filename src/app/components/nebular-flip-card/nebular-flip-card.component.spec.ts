import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularFlipCardComponent } from './nebular-flip-card.component';

describe('NebularFlipCardComponent', () => {
  let component: NebularFlipCardComponent;
  let fixture: ComponentFixture<NebularFlipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebularFlipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularFlipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
