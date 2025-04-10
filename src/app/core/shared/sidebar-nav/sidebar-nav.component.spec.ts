import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavComponent } from './sidebar-nav.component';
import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from '../../../features/components/dashboard/dashboard.component';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;

  // Define dummy routes if needed
  const routes: Routes = [{ path: '', component: DashboardComponent }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavComponent);
    fixture.componentRef.instance.loggedUserRole.set('admin');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
