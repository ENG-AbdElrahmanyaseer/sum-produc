import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteilsComponent } from './deteils.component';

describe('DeteilsComponent', () => {
  let component: DeteilsComponent;
  let fixture: ComponentFixture<DeteilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeteilsComponent]
    });
    fixture = TestBed.createComponent(DeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
