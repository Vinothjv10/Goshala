import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Center3Component } from './center3.component';

describe('Center3Component', () => {
  let component: Center3Component;
  let fixture: ComponentFixture<Center3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Center3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Center3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
