import { Component, signal } from '@angular/core';
import { RoleTitleComponent } from '../../../core/shared/role-title/role-title.component';
import { SidebarNavComponent } from '../../../core/shared/sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-sidebar',
  imports: [RoleTitleComponent, SidebarNavComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  roleTitle = signal<string>('Admin');
}
