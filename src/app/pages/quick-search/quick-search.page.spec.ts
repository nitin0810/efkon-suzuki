import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchPage } from './quick-search.page';

describe('QuickSearchPage', () => {
  let component: QuickSearchPage;
  let fixture: ComponentFixture<QuickSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
