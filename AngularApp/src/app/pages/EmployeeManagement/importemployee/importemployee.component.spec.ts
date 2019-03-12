import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportemployeeComponent } from './importemployee.component';

describe('ImportemployeeComponent', () => {
  let component: ImportemployeeComponent;
  let fixture: ComponentFixture<ImportemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
