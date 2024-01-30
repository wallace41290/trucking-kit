import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tk-feature-trucks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-trucks.component.html',
  styleUrl: './feature-trucks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTrucksComponent {}
