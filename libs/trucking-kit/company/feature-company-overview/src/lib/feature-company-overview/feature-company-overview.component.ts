import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trucking-kit-feature-company-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-company-overview.component.html',
  styleUrl: './feature-company-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCompanyOverviewComponent {}
