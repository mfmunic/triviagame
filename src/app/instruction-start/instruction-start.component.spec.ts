import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionStartComponent } from './instruction-start.component';

describe('InstructionStartComponent', () => {
  let component: InstructionStartComponent;
  let fixture: ComponentFixture<InstructionStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
