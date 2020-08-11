import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGridComponent } from './explore-grid.component';

describe('ExploreGridComponent', () => {
  let component: ExploreGridComponent;
  let fixture: ComponentFixture<ExploreGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
