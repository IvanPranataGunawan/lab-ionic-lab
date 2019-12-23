import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtamaPage } from './utama.page';

describe('UtamaPage', () => {
  let component: UtamaPage;
  let fixture: ComponentFixture<UtamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtamaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
