import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Center2Component } from './center2.component';

describe('Center2Component', () => {
  let component: Center2Component;
  let fixture: ComponentFixture<Center2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Center2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Center2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
