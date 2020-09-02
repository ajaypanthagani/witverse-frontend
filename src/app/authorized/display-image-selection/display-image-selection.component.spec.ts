import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayImageSelectionComponent } from './display-image-selection.component';

describe('DisplayImageSelectionComponent', () => {
  let component: DisplayImageSelectionComponent;
  let fixture: ComponentFixture<DisplayImageSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayImageSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayImageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
