import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGreetingSummaryComponent } from './user-greeting-summary.component';

describe('UserGreetingSummaryComponent', () => {
  let component: UserGreetingSummaryComponent;
  let fixture: ComponentFixture<UserGreetingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGreetingSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGreetingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
