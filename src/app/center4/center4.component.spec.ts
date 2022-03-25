import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Center4Component } from './center4.component';

describe('Center4Component', () => {
  let component: Center4Component;
  let fixture: ComponentFixture<Center4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Center4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Center4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
