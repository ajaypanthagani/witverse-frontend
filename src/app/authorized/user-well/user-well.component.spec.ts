import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWellComponent } from './user-well.component';

describe('UserWellComponent', () => {
  let component: UserWellComponent;
  let fixture: ComponentFixture<UserWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
