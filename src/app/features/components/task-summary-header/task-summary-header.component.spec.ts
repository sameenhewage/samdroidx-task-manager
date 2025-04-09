import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSummaryHeaderComponent } from './task-summary-header.component';

describe('TaskSummaryHeaderComponent', () => {
  let component: TaskSummaryHeaderComponent;
  let fixture: ComponentFixture<TaskSummaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSummaryHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
