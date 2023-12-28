import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trucking-kit-profile-feature-profile.component.html',
  styleUrl: './trucking-kit-profile-feature-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruckingKitProfileFeatureProfileComponent {}
