import { TestBed } from '@angular/core/testing';

import { NavigationMenuShowHideService } from './navigation-menu-show-hide.service';

describe('NavigationMenuShowHideService', () => {
  let service: NavigationMenuShowHideService;

  function resizeWindow(width: number) {
    (window as any).innerWidth = width;
    window.dispatchEvent(new Event('resize'));
  }

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

  it('should return true for width <= 991.98', () => {
    resizeWindow(768); // typical mobile width
    expect(service.isMobile()).toBeTrue();
  });

  it('should return false for width > 991.98', () => {
    resizeWindow(1200); // typical desktop width
    expect(service.isMobile()).toBeFalse();
  });

  it('should switch from false to true on resize to mobile', () => {
    resizeWindow(1200);
    expect(service.isMobile()).toBeFalse();

    resizeWindow(600);
    expect(service.isMobile()).toBeTrue();
  });

  it('should switch from true to false on resize to desktop', () => {
    resizeWindow(600);
    expect(service.isMobile()).toBeTrue();

    resizeWindow(1024);
    expect(service.isMobile()).toBeFalse();
  });
});
