import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPage } from './dynamic.page';

describe('DynamicPage', () => {
  let component: DynamicPage;
  let fixture: ComponentFixture<DynamicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
