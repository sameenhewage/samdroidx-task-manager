import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'manage-tasks',
    loadComponent: () =>
      import('./features/components/manage-task/manage-task.component').then(
        (m) => m.ManageTaskComponent
      ),
  },
  {
    path: 'create-task',
    loadComponent: () =>
      import(
        './features/components/tasks/create-task/create-task.component'
      ).then((m) => m.CreateTaskComponent),
  },
];
