import { Component, signal } from '@angular/core';
import { RoleTitleComponent } from '../../../core/shared/role-title/role-title.component';

@Component({
  selector: 'app-sidebar',
  imports: [RoleTitleComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  roleTitle = signal<string>('Admin');
}
