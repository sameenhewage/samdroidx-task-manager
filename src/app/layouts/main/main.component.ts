import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { NavigationMenuShowHideService } from '../../core/shared/services/navigation-menu-show-hide.service';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  navigationMenuShowHideService = inject(NavigationMenuShowHideService);
}
