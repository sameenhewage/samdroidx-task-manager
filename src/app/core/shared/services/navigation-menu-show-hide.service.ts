import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationMenuShowHideService {
  private _isSidebarActive = signal<boolean>(false);

  isSidebarActive = computed(() => this._isSidebarActive());

  /**
   * Toggles the isSidebarActive signal. If true, the sidebar will be shown
   * and if false, the sidebar will be hidden.
   */
  toggleSidebar() {
    this._isSidebarActive.set(!this._isSidebarActive());
  }

  private _isMobile = signal<boolean>(window.innerWidth <= 991.98);

  isMobile = computed(() => this._isMobile());

  constructor() {
    window.addEventListener('resize', () => {
      this._isMobile.set(window.innerWidth <= 991.98);
    });
  }
}
