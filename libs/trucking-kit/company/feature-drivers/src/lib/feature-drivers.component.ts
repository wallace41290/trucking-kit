import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-drivers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-drivers.component.html',
  styleUrl: './feature-drivers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDriversComponent {}
