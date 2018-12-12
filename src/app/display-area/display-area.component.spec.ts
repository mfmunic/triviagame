import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAreaComponent } from './display-area.component';

describe('DisplayAreaComponent', () => {
  let component: DisplayAreaComponent;
  let fixture: ComponentFixture<DisplayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
