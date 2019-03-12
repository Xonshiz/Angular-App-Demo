import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsowComponent } from './uploadsow.component';

describe('UploadsowComponent', () => {
  let component: UploadsowComponent;
  let fixture: ComponentFixture<UploadsowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
