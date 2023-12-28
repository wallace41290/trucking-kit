import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trucking-kit-home-feature-home.component.html',
  styleUrl: './trucking-kit-home-feature-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruckingKitHomeFeatureHomeComponent {}
