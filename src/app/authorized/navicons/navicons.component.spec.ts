import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviconsComponent } from './navicons.component';

describe('NaviconsComponent', () => {
  let component: NaviconsComponent;
  let fixture: ComponentFixture<NaviconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
