import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent {
  name = input.required<string>();
  size = input.required<number>();
  filterColor = input<string>();
}
