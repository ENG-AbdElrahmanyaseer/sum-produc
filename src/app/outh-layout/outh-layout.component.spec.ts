import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuthLayoutComponent } from './outh-layout.component';

describe('OuthLayoutComponent', () => {
  let component: OuthLayoutComponent;
  let fixture: ComponentFixture<OuthLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OuthLayoutComponent]
    });
    fixture = TestBed.createComponent(OuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
