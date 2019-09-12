import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSMComponent } from './vsm.component';

describe('VSMComponent', () => {
  let component: VSMComponent;
  let fixture: ComponentFixture<VSMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
