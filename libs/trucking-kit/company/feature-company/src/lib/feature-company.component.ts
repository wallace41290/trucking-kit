import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-company.component.html',
  styleUrl: './feature-company.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCompanyComponent {}
