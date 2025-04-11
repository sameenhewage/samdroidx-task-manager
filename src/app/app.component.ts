import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-manager-app';
}
