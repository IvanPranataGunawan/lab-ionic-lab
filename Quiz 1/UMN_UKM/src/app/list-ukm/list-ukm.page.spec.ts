import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUKMPage } from './list-ukm.page';

describe('ListUKMPage', () => {
  let component: ListUKMPage;
  let fixture: ComponentFixture<ListUKMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUKMPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUKMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
