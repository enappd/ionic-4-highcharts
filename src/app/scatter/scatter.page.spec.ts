import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterPage } from './scatter.page';

describe('ScatterPage', () => {
  let component: ScatterPage;
  let fixture: ComponentFixture<ScatterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
