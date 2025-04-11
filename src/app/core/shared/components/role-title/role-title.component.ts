import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-role-title',
  imports: [TitleCasePipe],
  templateUrl: './role-title.component.html',
  styleUrl: './role-title.component.scss',
})
export class RoleTitleComponent {
  roleTitle = input.required<string>();
}
