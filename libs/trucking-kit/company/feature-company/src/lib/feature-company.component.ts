import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tk-feature-company',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './feature-company.component.html',
  styleUrl: './feature-company.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCompanyComponent {
  /**
   * Layout
   * - heading
   * - tabs/left nav
   * - content
   *    - tables (drivers & trucks)
   *
   * Tabs
   * - info, drivers, trucks
   *
   * heading
   * - style in box
   *
   */
}
