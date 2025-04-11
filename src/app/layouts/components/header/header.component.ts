import { Component, inject, signal } from '@angular/core';
import { NavigationMenuShowHideService } from '../../../core/shared/services/navigation-menu-show-hide.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = signal<string>('Task Manager');

  navigationMenuShowHideService = inject(NavigationMenuShowHideService);
}
