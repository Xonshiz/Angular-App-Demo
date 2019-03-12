import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddlComponent } from './uploaddl.component';

describe('UploaddlComponent', () => {
  let component: UploaddlComponent;
  let fixture: ComponentFixture<UploaddlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaddlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
