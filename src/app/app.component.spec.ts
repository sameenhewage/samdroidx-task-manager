import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should contain <app-main>`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const mainElement = fixture.nativeElement.querySelector('app-main');
    expect(mainElement).toBeTruthy();
  });
});
