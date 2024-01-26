import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDashboardComponent {}
