import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-trucks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-trucks.component.html',
  styleUrl: './feature-trucks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTrucksComponent {}
