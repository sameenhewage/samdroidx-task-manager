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

  constructor() {}
}
