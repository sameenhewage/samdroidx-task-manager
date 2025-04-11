import { TestBed } from '@angular/core/testing';

import { NavigationMenuShowHideService } from './navigation-menu-show-hide.service';

describe('NavigationMenuShowHideService', () => {
  let service: NavigationMenuShowHideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationMenuShowHideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have sidebar inactive by default', () => {
    expect(service.isSidebarActive()).toBeFalse();
  });

  it('should toggle sidebar from false to true', () => {
    service.toggleSidebar();
    expect(service.isSidebarActive()).toBeTrue();
  });

  it('should toggle sidebar back to false', () => {
    service.toggleSidebar(); // true
    service.toggleSidebar(); // false
    expect(service.isSidebarActive()).toBeFalse();
  });

  it('should toggle multiple times correctly', () => {
    const states: boolean[] = [];
    for (let i = 0; i < 5; i++) {
      service.toggleSidebar();
      states.push(service.isSidebarActive());
    }
    expect(states).toEqual([true, false, true, false, true]);
  });
});
