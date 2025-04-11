import { Component, inject, signal } from '@angular/core';
import { RoleTitleComponent } from '../../../core/shared/components/role-title/role-title.component';
import { NgOptimizedImage } from '@angular/common';
import { SidebarNavComponent } from '../../../core/shared/components/sidebar-nav/sidebar-nav.component';
import { NavigationMenuShowHideService } from '../../../core/shared/services/navigation-menu-show-hide.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgOptimizedImage, RoleTitleComponent, SidebarNavComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [],
})
export class SidebarComponent {
  roleTitle = signal<string>('admin');
}
