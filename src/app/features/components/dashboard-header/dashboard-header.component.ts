import { Component } from '@angular/core';
import { TaskSummaryHeaderComponent } from '../task-summary-header/task-summary-header.component';

@Component({
  selector: 'app-dashboard-header',
  imports: [TaskSummaryHeaderComponent],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent {}
