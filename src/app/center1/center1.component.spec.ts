import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Center1Component } from './center1.component';

describe('Center1Component', () => {
  let component: Center1Component;
  let fixture: ComponentFixture<Center1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Center1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Center1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
