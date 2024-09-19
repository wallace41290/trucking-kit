import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TkPillTabsDirective } from '@shared/ui';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'sandbox-pill-tabs',
  standalone: true,
  imports: [CommonModule, TkPillTabsDirective, MatTabsModule],
  templateUrl: './pill-tabs.component.html',
  styleUrl: './pill-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillTabsComponent {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
}
