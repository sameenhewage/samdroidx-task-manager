import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getNavItems } from '../../../constants/navigation';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.scss',
})
export class SidebarNavComponent {
  loggedUserRole = signal<string>('admin');

  navItems = computed(() => getNavItems(this.loggedUserRole()));
}
