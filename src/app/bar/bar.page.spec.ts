import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarPage } from './bar.page';

describe('BarPage', () => {
  let component: BarPage;
  let fixture: ComponentFixture<BarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
